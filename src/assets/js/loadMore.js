export default function loadMore(res) {
  const messages = []
  //выводим по 2 сообщения
  // if res > 2 
  if (res.length > 2) {
    for (let i = 0; i < 2; i++) {
      //меняем main - false to main - true      
      res[i].main = true
      messages.push(res[i])
    }
    return messages
    // if res < 2
  } else {
    for (let i = 0; i < res.length; i++) {
      res[i].main = true
      messages.push(res[i])
    }
    return messages
  }
}
