(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{43:function(e,t,a){e.exports=a(93)},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},91:function(e,t,a){},92:function(e,t,a){},93:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(37),r=a.n(o),l=(a(48),a(49),a(2)),c=a(3),i=a(5),d=a(4),u=a(6),m=(a(50),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(s)))).state={},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"container login-container"},s.a.createElement("div",{className:"panel text-center center-block"},s.a.createElement("h1",{className:"title"},"mello."),s.a.createElement("button",{onClick:this.props.onLogin,type:"button",className:"btn login-btn"},"Log In with Trello")))}}]),t}(n.Component)),p=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(d.a)(t).call(this,e))).state={boards:null},a.generateBoardList=function(){return a.state.boards.map(function(e){return s.a.createElement("option",{key:e.id,value:e.id},e.name)})},a.props.trelloHandler.loadBoards(function(e){a.setState({boards:e})}),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("select",{className:"form-control select-board",onChange:this.props.onSelect},s.a.createElement("option",{key:-1,value:-1},"Select Board"),this.state.boards&&this.generateBoardList())}}]),t}(n.Component),h=(a(51),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(d.a)(t).call(this,e))).state={memberID:null},a.generateAccountLink=function(){return a.state.memberID?"https://trello.com/"+a.state.memberID+"/account":"#"},a.props.trelloHandler.getMember(function(e){a.setState({memberID:e.id})}),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("nav",{className:"navbar"},s.a.createElement("div",{className:"col-sm-3 text-left"},s.a.createElement("ul",{className:"navbar-nav align-middle"},s.a.createElement("li",{className:"nav-item"},s.a.createElement(p,{trelloHandler:this.props.trelloHandler,onSelect:this.props.onSelect})))),s.a.createElement("div",{className:"col-sm-6"},s.a.createElement("h1",{className:"title navbar-title align-middle"},"mello.")),s.a.createElement("div",{className:"col-sm-3 text-right"},s.a.createElement("a",{href:this.generateAccountLink(),className:"account-icon align-middle"},s.a.createElement("i",{className:"material-icons align-middle"},"account_circle"))))}}]),t}(n.Component)),f=a(11),b=a(7),g=a(10),k=(a(52),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(s)))).state={},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement(g.b,{draggableId:this.props.task.id,index:this.props.index},function(t,a){return s.a.createElement("div",Object.assign({className:"list-item"+(a.isDragging?" on-drag":"")},t.draggableProps,t.dragHandleProps,{ref:t.innerRef}),e.props.task.name)})}}]),t}(n.Component)),v=(a(91),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(s)))).state={addingNewTask:!1,newTask:null},a.handleNewTaskChange=function(e){a.setState({newTask:e.target.value})},a.onSubmitNewTask=function(e){e.preventDefault(),a.props.trelloHandler.addNewTask(a.props.column.id,a.state.newTask,a.props.onAddNewTask),a.setState({addingNewTask:!1,newTask:null})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"newTaskButton",value:function(){var e=this;return this.state.addingNewTask?s.a.createElement("form",{className:"new-task-container",onSubmit:this.onSubmitNewTask},s.a.createElement("input",{className:"new-task-input",type:"text",value:this.state.value,placeholder:"Enter New Task",onChange:this.handleNewTaskChange}),s.a.createElement("input",{type:"submit",value:"Add",className:"btn btn-new-task-submit"})):s.a.createElement("div",{className:"new-task-container"},s.a.createElement("button",{className:"btn btn-new-task",onClick:function(){e.setState({addingNewTask:!0})}},s.a.createElement("i",{className:"material-icons"},"add")))}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"grid-item"},s.a.createElement("div",{className:"card t-list"},s.a.createElement("div",{className:"card-header handle"},s.a.createElement("p",{className:"card-title"},this.props.column.name)),s.a.createElement(g.c,{droppableId:this.props.column.id,type:"task"},function(t,a){return s.a.createElement("div",Object.assign({className:"list-item-container",ref:t.innerRef},t.droppableProps),e.props.tasks.map(function(e,t){return s.a.createElement(k,{key:e.id,task:e,index:t})}),e.newTaskButton(),t.placeholder)})))}}]),t}(n.Component)),O=(a(92),window.Packery),y=window.Draggabilly,j=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(s)))).state={data:a.props.lists,pckry:null},a.componentDidMount=function(){var e=document.querySelector(".grid"),t=new O(e,{itemSelector:".grid-item",columnWidth:".grid-sizer",gutter:".gutter-sizer",percentPosition:!0});a.setState({pckry:t}),t.getItemElements().forEach(function(e){var a=new y(e,{handle:".handle"});t.bindDraggabillyEvents(a)}),t.layout()},a.addNewTask=function(e){var t=Object(b.a)({},a.state.data);t.columns[e.idList].taskIds.push(e.id),t.tasks[e.id]=Object(b.a)({},e),a.setState({data:t})},a.onDragEnd=function(e){var t=e.destination,n=e.source,s=e.draggableId;if(t&&(t.droppableId!==n.droppableId||t.index!==n.index)){var o=a.state.data.columns[n.droppableId],r=a.state.data.columns[t.droppableId],l=Array.from(o.taskIds);l.splice(n.index,1);var c=Object(b.a)({},o,{taskIds:l});if(o===r){l.splice(t.index,0,s);var i=Object(b.a)({},a.state.data,{columns:Object(b.a)({},a.state.data.columns,Object(f.a)({},c.id,c))});a.setState({data:i})}else{var d,u=Array.from(r.taskIds);u.splice(t.index,0,s);var m=Object(b.a)({},r,{taskIds:u}),p=Object(b.a)({},a.state.data,{columns:Object(b.a)({},a.state.data.columns,(d={},Object(f.a)(d,c.id,c),Object(f.a)(d,m.id,m),d))});a.setState({data:p}),a.props.trelloHandler.dragToNewColumn(r.id,s)}}},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"compomentDidUnmount",value:function(){this.state.pckry.destroy()}},{key:"componentDidUpdate",value:function(){this.state.pckry&&(this.state.pckry.reloadItems(),this.state.pckry.layout())}},{key:"render",value:function(){var e=this;return this.state.data?s.a.createElement(g.a,{onDragEnd:this.onDragEnd},s.a.createElement("div",{className:"container container-board"},s.a.createElement("div",{className:"grid"},s.a.createElement("div",{className:"gutter-sizer"}),s.a.createElement("div",{className:"grid-sizer"}),this.state.data.columnOrder.map(function(t,a){var n=e.state.data.columns[t],o=n.taskIds.map(function(t){return e.state.data.tasks[t]});return s.a.createElement(v,{key:n.id,column:n,tasks:o,index:a,trelloHandler:e.props.trelloHandler,onAddNewTask:e.addNewTask})})))):null}}]),t}(n.Component),w=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(s)))).state={selectedBoard:null,lists:null},a.handleClick=function(){console.log(a.props.trelloHandler.boards)},a.handleSelect=function(e){a.props.trelloHandler.getBoard(e.target.value,function(e){a.setState({selectedBoard:e},a.boardSelected)},function(){a.setState({selectedBoard:null,lists:null},a.boardDeselected)})},a.boardSelected=function(){a.boardDeselected(),a.loadLists(null,function(){a.setBackground(!0),a.props.trelloHandler.getListTaskData(a.state.selectedBoard.id,a.loadLists)})},a.boardDeselected=function(){a.setBackground(!1),a.props.trelloHandler.resetTaskData()},a.setBackground=function(e){e?a.state.selectedBoard&&(document.body.style.backgroundImage="url("+a.state.selectedBoard.prefs.backgroundImage+")"):document.body.style.backgroundImage="none"},a.loadLists=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};a.setState({lists:e},t)},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"generateBoard",value:function(){return s.a.createElement(j,{lists:this.state.lists,trelloHandler:this.props.trelloHandler})}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(h,{trelloHandler:this.props.trelloHandler,onSelect:this.handleSelect}),this.state.lists&&this.generateBoard())}}]),t}(n.Component),E=function(){function e(t){var a=this;Object(l.a)(this,e),this.authorize=function(e){a.Trello.authorize({type:"popup",name:"mello.",scope:{read:!0,write:!0},expiration:"never",success:function(){e(!0),this.authorized=!0,console.log("Authorization Successful")}.bind(a),error:function(){e(!1),console.log("Authorization Failed")}})},this.getMember=function(e){a.Trello.get("/members/me",function(t){e(t),console.log("User loaded succesfully")},function(){console.log("Failed to load member")})},this.loadBoards=function(e){a.Trello.get("/members/me/boards?filter=open",function(t){console.log("Boards loaded"),e(t),this.boards=t}.bind(a),function(){console.log("Failed to load boards")})},this.getBoard=function(e,t,n){"-1"!==e?a.Trello.get("/boards/"+e,function(e){t(e)},function(){console.log("Failed to get board: "+e)}):n()},this.resetTaskData=function(){a.taskData={tasks:{},columns:{},columnOrder:[]}},this.getListTaskData=function(e,t){a.resetTaskData(),a.Trello.get("/boards/"+e+"/lists",function(e){console.log("Lists loaded succesfully"),this.getTasksFromLists(e,t)}.bind(a),function(){console.log("Failed to load lists")})},this.getTasksFromLists=function(e,t){0===e.length&&(t(a.taskData),console.log("Successfully parsed list/task data")),console.log("Getting Tasks");var n=0;e.forEach(function(s){a.Trello.get("/lists/"+s.id+"/cards",function(a){this.processTaskData(Object(b.a)({},s,{tasks:a})),++n===e.length&&(t(this.taskData),console.log("Successfully parsed list/task data"))}.bind(a),function(){console.log("Failed to load cards")})})},this.processTaskData=function(e){a.taskData.columns[e.id]=Object(b.a)({},e,{taskIds:[]}),e.tasks.forEach(function(t){a.taskData.columns[e.id].taskIds.push(t.id),a.taskData.tasks[t.id]=Object(b.a)({},t)}),a.taskData.columnOrder.push(e.id)},this.addNewTask=function(e,t,n){a.Trello.post("/cards?name="+t+"&idList="+e,function(e){n(e),console.log("Card create successful")},function(){console.log("Card create unsuccessful")})},this.Trello=t,this.authorized=!1,this.boards=null,this.member=null,this.taskData={tasks:{},columns:{},columnOrder:[]}}return Object(c.a)(e,[{key:"dragToNewColumn",value:function(e,t){this.Trello.put("/cards/"+t+"?idList="+e,function(e){console.log("Card drag successful")},function(){console.log("Card drag unsuccessful")})}}]),e}(),N=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(s)))).Trello=new E(window.Trello),a.state={authorized:!1},a.onLogin=function(){console.log("Login Request"),a.Trello.authorize(a.verifyAuthorize)},a.verifyAuthorize=function(e){e&&a.setState({authorized:!0})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return this.state.authorized?s.a.createElement(w,{trelloHandler:this.Trello}):s.a.createElement(m,{onLogin:this.onLogin})}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[43,1,2]]]);
//# sourceMappingURL=main.274c38f5.chunk.js.map