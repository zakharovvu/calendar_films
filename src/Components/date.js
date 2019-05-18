export const nextMount = 'next'
export const prevMount = 'prev'

export let mounts = {
  RU: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 
      'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
  US: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 
      'August', 'September', 'October', 'November', 'December', ]
}

export let mounts2 = {
  RU: ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 
      'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'],
  US: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 
      'August', 'September', 'October', 'November', 'December', ]
}


export let getGridCurrentMount = (date) => {
  const countPrev = getCountDay(date, prevMount)[1]
  const countCurrent = getCountDay(date)[1] 
  let arr = []
  let currentDay = date.getDay()
  
  for (let i = date.getDate(); i > 0; i--) {
    currentDay <= 0 ? currentDay = 6 : currentDay--
  }
  let countDayAndMount = countPrev - currentDay
  for (let i = 0; i < currentDay; i++) {
    if (countPrev > countDayAndMount) {
      arr.push( {number: countDayAndMount, active: false} )
      countDayAndMount++
    }
  }
  for (let i = 0; i < countCurrent; i++) {
    arr.push({number: i + 1, active: true})
  }
  if (arr.length < 35) {
    let x = 1
    for (let i = arr.length; i < 35; i++) {
      arr.push({number: x, active: false})
      x++
    }
  }
  if (arr.length > 35) {
    let x = 1
    for (let i = arr.length; i < 42; i++) {
      arr.push({number: x, active: false})
      x++
    }
  }
  return arr
}

export let getCountDay = (date, mount) => {
  let number = 33
  let newDate =  new Date(date);
  if (mount === prevMount) newDate.setMonth(newDate.getMonth() - 1)
  if (mount === nextMount) newDate.setMonth(newDate.getMonth() + 1)
  let newDate2 = new Date(newDate);
  newDate.setDate(number)
  return [newDate2, number - newDate.getDate()]
}