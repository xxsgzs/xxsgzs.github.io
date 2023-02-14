  function getTotal()
  {
    //获取工作室人数
    let functionVersion = "1.0"
    let id = document.getElementById("id").innerHTML=haveGetTotal();
    console.log("getPotal version " + functionVersion + " for xxsgzs.github.io （￣︶￣）↗　")
  }
  function haveGetTotal()
  {
    //返回工作室人数，目前不能联网
    let functionVersion = "1.0"
    console.log("haveGetTotal version " + functionVersion + " to use the getTotal []~(￣▽￣)~*")
    let totals = 47;
    return totals;
  }
  function checkOp()
  {
    let functionVersion = "1.0"
    //检测是否为管理员，如果是就显示修改按钮
    if (document.cookie == 1)
    {
      let op = document.getElementById("op")
      op.innerHTML = " <h2><footer-top-left>&nbsp>>>&nbsp<a href='https://github.com/xxsgzs/xxsgzs.github.io'style='border-radius:10px 10px 10px 10px;'>在github上修改!</a></footerer-top-left></h2>"
    }
    console.log("checkOp version " + functionVersion + " for xxsgzs.github.io ヾ(≧▽≦*)o")
  }
