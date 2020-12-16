function calculateScore(player){
  var points = 0
  switch(player.position){
    case 'QB':
      points += (player.stats.passing.yards / 25)
      points += (player.stats.passing.touchdowns * 6)
      points -= (player.stats.passing.interceptions * 3)

      points += (player.stats.rushing.yards / 10)
      points += (player.stats.rushing.touchdowns * 6)
      points -= (player.stats.rushing.fumbles * 3)
      return points
  

    case 'RB':
      points += (player.stats.rushing.yards / 10)
      points += (player.stats.rushing.touchdowns * 6)
      points -= (player.stats.rushing.fumbles * 3)

      points += (player.stats.receiving.receptions)
      points += (player.stats.receiving.yards / 10)
      points += (player.stats.receiving.touchdowns *6)
      points -= (player.stats.receiving.fumbles * 3)

      points += (player.stats.return.kickreturn.yards / 15)
      points += (player.stats.return.kickreturn.touchdowns *6)
      points -= (player.stats.return.kickreturn.fumbles * 3)

      points += (player.stats.return.puntreturn.yards / 15)
      points += (player.stats.return.puntreturn.touchdowns *6)
      points -= (player.stats.return.puntreturn.fumbles * 3)
      return points
  

    case 'WR':
      points += (player.stats.rushing.yards / 10)
      points += (player.stats.rushing.touchdowns * 6)
      points -= (player.stats.rushing.fumbles * 3)

      points += (player.stats.receiving.receptions)
      points += (player.stats.receiving.yards / 10)
      points += (player.stats.receiving.touchdowns *6)
      points -= (player.stats.receiving.fumbles * 3)

      points += (player.stats.return.kickreturn.yards / 15)
      points += (player.stats.return.kickreturn.touchdowns *6)
      points -= (player.stats.return.kickreturn.fumbles * 3)

      points += (player.stats.return.puntreturn.yards / 15)
      points += (player.stats.return.puntreturn.touchdowns *6)
      points -= (player.stats.return.puntreturn.fumbles * 3)
      return points
  

    case 'TE':
      points += (player.stats.receiving.receptions)
      points += (player.stats.receiving.yards / 10)
      points += (player.stats.receiving.touchdowns *6)
      points -= (player.stats.receiving.fumbles * 3)
      return points
    
    default:
      return 0
  }
}

module.exports = calculateScore