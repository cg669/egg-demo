<html>
  <head>
    <title>Hacker News</title>
    <!-- <link rel="stylesheet" href="/public/css/news.css" /> -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.11.0/jquery.js"></script>
    <style>
      #customers
        {
        font-family:"Trebuchet MS", Arial, Helvetica, sans-serif;
        width:60%;
        border-collapse:collapse;
        }

      #customers td, #customers th 
        {
        font-size:1em;
        border:1px solid #98bf21;
        padding:3px 7px 2px 7px;
        }

      #customers th 
        {
        font-size:1.1em;
        text-align:left;
        padding-top:5px;
        padding-bottom:4px;
        background-color:#A7C942;
        color:#ffffff;
        }

      #customers tr.alt td 
        {
        color:#000000;
        background-color:#EAF2D3;
        }
      .inp{
        position: absolute;
        right: 100px;
        top: 100px;
      }
    </style>
  </head>
  <body>
    <table id="customers">
      <tr>
        <th>序号</th>
        <th>姓名</th>
        <th>年龄</th>
      </tr>
      {% for item in list %}
      <tr>
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.age }}</td>
      </tr>
      {% endfor %}
    </table>
    <div class="inp">
        姓名：<input type="text" width="200px" class="name">
        年龄：<input type="text" width="200px" class="age">
        <button onclick="handleAddUser()">新增用户</button>
    </div>
    <script>
        let $name = $('.name')
        let $age = $('.age')
        let $table = $('#customers')
        
        function handleAddUser(){
            $.post(
                '/api/users/create',
                {
                  name:$name.val(),age:$age.val()
                },
                function(){
                  alert('添加成功')
                  getUserList()
                },
                "json"
            )
        }
        function getUserList(){
          $.post(
                '/api/users/list',
                {
                  
                },
                function(data){
                  console.log(data)
                  renderTable(data.data)
                  // alert('初始化成功')
                },
                "json"
            )
        }

        function renderTable(list){
          let sContent = '<tr><th>序号</th><th>姓名</th><th>年龄</th></tr>'
          list.forEach( el => {
            sContent += `<tr><td>${el.id}</td><td>${el.name}</td><td>${el.age}</td></tr>`
          })
          $table.html(sContent)
        }
    </script>
  </body>
</html>