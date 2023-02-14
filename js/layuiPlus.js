
  let scriptVersion = "1.0"
  console.log("layui version" + scriptVersion + "for xxsgzs.github.io ;)")
  var layer = layui.layer;
  function layuiAlert(get)
  {
    layer.open({
      title: '提示',
      content: get,
      closeBtn:0
    });     
  }
  function layuiWindowAlert(get)
  {
    let dialogText = "您似乎要离开本页面，在新的页面中，请保证您的隐私与财产安全！<br />网址：" + get;
    layer.confirm(dialogText, {
    title:"提示",closeBtn:0,btn: ['确定','取消'] 
    ,btn2: function(index, layero){
    //按钮【按钮三】的回调
    }
    }, function(index, layero){
      window.open(get)
      layer.closeAll('dialog');
    }, function(index){
    //按钮【按钮二】的回调
    });
  }
  function layuiDownload202302(get)
  {
    layer.confirm(get, {
    title:"提示",closeBtn:0,btn: ['确定','取消'] 
    ,btn2: function(index, layero){
    //按钮【按钮三】的回调
    }
    }, function(index, layero){
      window.open("https://xxsgzs.github.io/%E5%B0%8F%E5%AD%A6%E7%94%9F%E5%B7%A5%E4%BD%9C%E5%AE%A4%E5%85%A5%E5%AE%A4%E8%80%83%E8%AF%95%E8%AF%95%E9%A2%98A.docx")
      layer.closeAll('dialog');
    }, function(index){
    //按钮【按钮二】的回调
    });
  }
