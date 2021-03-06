import numpy as np # linear algebra
import pandas as pd # data processing, CSV file I/O (e.g. pd.read_csv)
import warnings
import json as json

warnings.simplefilter(action = "ignore", category = FutureWarning)

ballbyball = pd.read_csv('../data-set-conversion/csv/Ball_by_Ball.csv')
match = pd.read_csv('../data-set-conversion/csv/Match.csv')
Season = pd.read_csv('../data-set-conversion/csv/Season.csv')
player = pd.read_csv('../data-set-conversion/csv/Player.csv')
Team = pd.read_csv('../data-set-conversion/csv/Team.csv')

ballbyball['Batsman_Scored'] = ballbyball['Batsman_Scored'].apply(lambda x: int(x) if x.isnumeric() else 0)

#1: Season.csv: ------------------------------------------------------------------------------
# make it the first container in the dashboard
#a)Orange cap, pupple cap and man of the series.
#highest number run scorer

Season.columns = ['Season_Id', 'Season_Year', 'Player_Id', 'Purple_Cap_Id', 'Man_of_the_Series_Id']
orangeCap = pd.merge(Season, player)
merged = orangeCap[['Season_Year','Player_Name']]
sortedYearOrange = merged.sort_values(by=['Season_Year'], ascending=[True])
sortedYearOrange.columns=['Season_Year','Orange_Cap_Id']
# with open('../frontendData/orangeCap.json', 'w') as f:
#     f.write(sortedYearOrange.to_json(orient='table'))

#highest run wicket tacker
Season.columns = ['Season_Id', 'Season_Year', 'Orange_Cap_Id', 'Player_Id', 'Man_of_the_Series_Id']
purpleCap = pd.merge(Season, player)
merged = purpleCap[['Season_Year','Player_Name']]
sortedYearPurple = merged.sort_values(by=['Season_Year'], ascending=[True])
sortedYearPurple.columns=['Season_Year','Purple_Cap_Id']
# with open('../frontendData/purpleCap.json', 'w') as f:
#     f.write(sortedYearPurple.to_json(orient='table'))

#man of the series
Season.columns = ['Season_Id', 'Season_Year', 'Orange_Cap_Id', 'Purple_Cap_Id', 'Player_Id']
manOfTheSeries = pd.merge( player,Season)
merged= manOfTheSeries[['Season_Year','Player_Name']]
sortYearManseries = merged.sort_values(by=['Season_Year'], ascending=[True])
sortYearManseries.columns=['Season_Year','Man_of_the_Series_Id']
# with open('../frontendData/manOfTheSeries.json', 'w') as f:
#     f.write(sortYearManseries.to_json(orient='table'))

combineTwo = pd.merge(sortedYearOrange, sortedYearPurple)
combineThree = pd.merge(combineTwo, sortYearManseries)
with open('../frontendData/goldenPlayer.json', 'w') as f:
    f.write(combineThree.to_json(orient='table'))

#Strikers------------------------------------------------------------------------------
#2: batsmanRunScored. Sorted by max run
runScoredPerPlayer = ballbyball.groupby(['Striker_Id'])['Batsman_Scored'].sum().reset_index()
runScoredPerPlayer.columns = ['Player_Id','Batsman_Scored']
mergedWithPlayer = pd.merge(runScoredPerPlayer,player)
filterMergedWithPlayer = mergedWithPlayer[['Player_Name','Batsman_Scored']]
batsmanAggScore = filterMergedWithPlayer.sort_values(by=['Batsman_Scored'], ascending=[False]).iloc[0:30]
with open('../frontendData/batsmanAggScore.json', 'w') as f:
    f.write(batsmanAggScore.to_json(orient='table'))

# Bat: top performenrs by match 
#TODO: Could be done in better way. 
BatsManScoredPerSeasonWise = ballbyball[['Match_Id', 'Striker_Id', 'Batsman_Scored']]
mergeWithMatch = pd.merge(BatsManScoredPerSeasonWise, match)
filterBySeasonId = mergeWithMatch.groupby(['Season_Id', 'Striker_Id'])['Batsman_Scored'].sum().reset_index()
filterBySeasonId.columns = ['Season_Id',  'Player_Id',  'Batsman_Scored']
mergeWithPlayer = pd.merge(filterBySeasonId, player)
resetTopPerformersBatsman = mergeWithPlayer.groupby(['Season_Id', 'Player_Name'])['Batsman_Scored'].sum().reset_index()
topPerformersBatsman = resetTopPerformersBatsman.sort_values(['Season_Id','Batsman_Scored'], ascending=[True,False]).reset_index()
with open('../frontendData/topPerformersBatsman.json', 'w') as f:
    f.write(topPerformersBatsman.to_json(orient='table'))


#TOP BatsMan season Wise run. sorted by season then max run scored
#TODO: find a way to replace only one coloum.
ballbyball.columns = ['Match_Id','Innings_Id','Over_Id','Ball_Id','Team_Batting_Id','Team_Bowling_Id','Player_Id','Striker_Batting_Position','Non_Striker_Id','Bowler_Id','Batsman_Scored','Extra_Type','Extra_Runs','Player_dissimal_Id','Dissimal_Type','Fielder_Id']
merged = pd.merge(ballbyball, player)
mergedWithmatch = pd.merge(merged,match)
seasonWiseBatsMan = mergedWithmatch[['Season_Id','Player_Name','Batsman_Scored']]
groupBy = seasonWiseBatsMan.groupby(['Season_Id','Player_Name'])['Batsman_Scored'].sum().reset_index()
runSortedBySeason = groupBy.sort_values(['Season_Id','Batsman_Scored'], ascending=[True,False])
with open('../frontendData/runSortedBySeason.json', 'w') as f:
    f.write(runSortedBySeason.to_json(orient='table'))
#print(sortedScore)

#Bowlers:------------------------------------------------------------------------------
#3: filter all the cases caught, bowled, runOut and many more.
#TODO: filter "run out" from below data.
a = ballbyball.loc[ballbyball['Dissimal_Type'] != ' ', ['Bowler_Id', 'Dissimal_Type']]
b = a.groupby(['Bowler_Id', 'Dissimal_Type']).agg({'Dissimal_Type' : 'count'})
mostWisketTackers = b.groupby(['Bowler_Id'])['Dissimal_Type'].sum().reset_index()
srotedMostWicketTackers = mostWisketTackers.sort_values(by=['Dissimal_Type'], ascending=[False])
srotedMostWicketTackers.columns = ['Player_Id', 'Dissimal_Type']
mmergedMostWisketTackers= pd.merge(srotedMostWicketTackers, player).iloc[0:20]
getOnly = mmergedMostWisketTackers[['Player_Name','Bowling_Skill','Dissimal_Type','Country']]
with open('../frontendData/mostWisketTackers.json', 'w') as f:
    f.write(getOnly.to_json(orient='table'))



#Season wise, Dissmisal type
result = pd.merge(ballbyball, match)
result1 = result.loc[result['Dissimal_Type'] != ' ', ['Season_Id', 'Dissimal_Type']]
#seasonWiseDissmisal = result1.groupby(['Season_Id', 'Dissimal_Type']).agg({'Dissimal_Type' : 'count'})
seasonWiseDissmisal = result1.groupby(['Dissimal_Type']).agg({'Dissimal_Type' : 'count'})

with open('../frontendData/seasonWiseDissmisal.json', 'w') as f:
    f.write(seasonWiseDissmisal.to_json(orient='split'))


#4:match played by each team ------------------------------------------------------------------------------
# #Merge and get the total match played till now.
#a). Total match played till now.[#ui-box] | b) SeasonWise match played by team.[#ui-box]
#c). 
#MatchPlayed = match.groupby(['Season_Id','Match_Id'])['Venue_Name'].count().reset_index()
TotalNumberOfMatchesTeamA = match.groupby(['Season_Id','Team_Name_Id'])['Match_Id'].count().reset_index()
TotalNumberOfMatchesTeamA.columns = ['Season_Id','Team_Name_Id','Match_IdTeamA']
TotalNumberOfMatchesTeamB = match.groupby(['Season_Id','Opponent_Team_Id'])['Match_Id'].count().reset_index()
TotalNumberOfMatchesTeamB.columns = ['Season_Id','Team_Name_Id','Match_IdTeamB']
merged = pd.merge(TotalNumberOfMatchesTeamA,TotalNumberOfMatchesTeamB)
merged['totalMatchedPlayed'] = merged['Match_IdTeamA'] + merged['Match_IdTeamB']
#filterMerge = 
filterMerged = merged[['Season_Id','Team_Name_Id','totalMatchedPlayed']]
filterMerged.columns=['Season_Id','Team_Id','totalMatchedPlayed']
mergewithteam = pd.merge(filterMerged, Team)
filterWithTeam = mergewithteam[['Season_Id','Team_Name','totalMatchedPlayed']]
groupbyTotalMatch = filterWithTeam.groupby(['Season_Id','Team_Name'])['totalMatchedPlayed'].sum().reset_index()


#Macthes Winner by IPL seasion.. 
#TODO: Match_Winner_Id coloumn comming two times...
matchPerformance = match.groupby(['Season_Id','Match_Winner_Id'])['IS_Result'].sum().reset_index()
matchPerformance.columns = ['Season_Id', 'Team_Id', 'won']
mergeWithTeam = pd.merge(matchPerformance,Team)
filterWithTeam = mergeWithTeam.groupby(['Season_Id','Team_Name', 'won'])['Team_Id'].count().reset_index()

mergeTotalWin = pd.merge(groupbyTotalMatch,filterWithTeam)
mergeTotalWin['loss'] = mergeTotalWin['totalMatchedPlayed'] - mergeTotalWin['won']
IPLPerTeamPerformance = mergeTotalWin[['Season_Id','Team_Name', 'totalMatchedPlayed', 'won', 'loss']]

with open('../frontendData/teamPerMatchPerform.json', 'w') as f:
    f.write(IPLPerTeamPerformance.to_json(orient='table'))

IPLPerTeamPerformance = IPLPerTeamPerformance[['Season_Id','Team_Name','won']].sort_values(by=['Team_Name'], ascending=[True])

IPLPerTeamPerformance = IPLPerTeamPerformance[['Team_Name','Season_Id','won']]
mergeWithYear = pd.merge(IPLPerTeamPerformance,Season )
sortWithTeamName = mergeWithYear[['Team_Name','Season_Year','won']].sort_values(by=['Team_Name'], ascending=[True])
with open('../frontendData/IPLPerTeamPerformanceGraph.json', 'w') as f:
    f.write(sortWithTeamName.to_json(orient='table'))
#orient could be any of the below
#The format of the JSON string
#split : dict like {index -> [index], columns -> [columns], data -> [values]}
#records : list like [{column -> value}, ... , {column -> value}]
#index : dict like {index -> {column -> value}}
#columns : dict like {column -> {index -> value}}
#values : just the values array
#table : dict like {‘schema’: {schema}, ‘data’: {data}} describing the data, and the data component is like orient='records'.
