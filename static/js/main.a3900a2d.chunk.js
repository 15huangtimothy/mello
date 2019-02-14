(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,t,a){},103:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(38),s=a.n(r),l=(a(49),a(51),a(2)),c=a(3),i=a(6),d=a(4),u=a(5),m=(a(53),a(55),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"container login-container"},o.a.createElement("div",{className:"panel text-center center-block"},o.a.createElement("h1",{className:"title"},"mello."),o.a.createElement("button",{onClick:this.props.onLogin,type:"button",className:"btn login-btn"},"Log In with Trello")))}}]),t}(n.Component)),h=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(d.a)(t).call(this,e))).state={boards:null},a.generateBoardList=function(){return a.state.boards.map(function(e){return o.a.createElement("option",{key:e.id,value:e.id},e.name)})},a.props.trelloHandler.loadBoards(function(e){a.setState({boards:e})}),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("select",{className:"form-control select-board",onChange:this.props.onSelect},o.a.createElement("option",{key:-1,value:-1},"Select Board"),this.state.boards&&this.generateBoardList())}}]),t}(n.Component),p=(a(57),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(d.a)(t).call(this,e))).state={memberID:null},a.generateAccountLink=function(){return a.state.memberID?"https://trello.com/"+a.state.memberID+"/account":"#"},a.props.trelloHandler.getMember(function(e){a.setState({memberID:e.id})}),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("nav",{className:"navbar"},o.a.createElement("div",{className:"col-sm-3 text-left"},o.a.createElement("ul",{className:"navbar-nav align-middle"},o.a.createElement("li",{className:"nav-item"},o.a.createElement(h,{trelloHandler:this.props.trelloHandler,onSelect:this.props.onSelect})))),o.a.createElement("div",{className:"col-sm-6"},o.a.createElement("h1",{className:"title navbar-title align-middle"},"mello.")),o.a.createElement("div",{className:"col-sm-3 text-right"},o.a.createElement("a",{href:this.generateAccountLink(),className:"account-icon align-middle"},o.a.createElement("i",{className:"material-icons align-middle"},"account_circle"))))}}]),t}(n.Component)),b=a(11),f=a(7),g=a(10),k=(a(59),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(g.b,{draggableId:this.props.task.id,index:this.props.index},function(t,a){return o.a.createElement("div",Object.assign({className:"list-item"+(a.isDragging?" on-drag":"")},t.draggableProps,t.dragHandleProps,{ref:t.innerRef}),e.props.task.name)})}}]),t}(n.Component)),v=(a(99),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"grid-item"},o.a.createElement("div",{className:"card t-list"},o.a.createElement("div",{className:"card-header handle"},o.a.createElement("p",{className:"card-title"},this.props.column.name)),o.a.createElement(g.c,{droppableId:this.props.column.id,type:"task"},function(t,a){return o.a.createElement("div",Object.assign({className:"list-item-container",ref:t.innerRef},t.droppableProps),e.props.tasks.map(function(e,t){return o.a.createElement(k,{key:e.id,task:e,index:t})}),t.placeholder)})))}}]),t}(n.Component)),O=(a(101),window.Packery),y=window.Draggabilly,j=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={data:a.props.lists,pckry:null},a.componentDidMount=function(){var e=document.querySelector(".grid"),t=new O(e,{itemSelector:".grid-item",columnWidth:".grid-sizer",gutter:".gutter-sizer",percentPosition:!0});a.setState({pckry:t}),t.getItemElements().forEach(function(e){var a=new y(e,{handle:".handle"});t.bindDraggabillyEvents(a)}),t.layout()},a.onDragEnd=function(e){var t=e.destination,n=e.source,o=e.draggableId;if(t&&(t.droppableId!==n.droppableId||t.index!==n.index)){var r=a.state.data.columns[n.droppableId],s=a.state.data.columns[t.droppableId],l=Array.from(r.taskIds);l.splice(n.index,1);var c=Object(f.a)({},r,{taskIds:l});if(r===s){l.splice(t.index,0,o);var i=Object(f.a)({},a.state.data,{columns:Object(f.a)({},a.state.data.columns,Object(b.a)({},c.id,c))});a.setState({data:i})}else{var d,u=Array.from(s.taskIds);u.splice(t.index,0,o);var m=Object(f.a)({},s,{taskIds:u}),h=Object(f.a)({},a.state.data,{columns:Object(f.a)({},a.state.data.columns,(d={},Object(b.a)(d,c.id,c),Object(b.a)(d,m.id,m),d))});a.setState({data:h})}}},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"compomentDidUnmount",value:function(){this.state.pckry.destroy()}},{key:"componentDidUpdate",value:function(){this.state.pckry&&(this.state.pckry.reloadItems(),this.state.pckry.layout())}},{key:"render",value:function(){var e=this;return this.state.data?o.a.createElement(g.a,{onDragEnd:this.onDragEnd},o.a.createElement("div",{className:"container container-board"},o.a.createElement("div",{className:"grid"},o.a.createElement("div",{className:"gutter-sizer"}),o.a.createElement("div",{className:"grid-sizer"}),this.state.data.columnOrder.map(function(t,a){var n=e.state.data.columns[t],r=n.taskIds.map(function(t){return e.state.data.tasks[t]});return o.a.createElement(v,{key:n.id,column:n,tasks:r,index:a})})))):null}}]),t}(n.Component),E=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={selectedBoard:null,lists:null},a.handleClick=function(){console.log(a.props.trelloHandler.boards)},a.handleSelect=function(e){a.props.trelloHandler.getBoard(e.target.value,function(e){a.setState({selectedBoard:e},a.boardSelected)},function(){a.setState({selectedBoard:null,lists:null},a.boardDeselected)})},a.boardSelected=function(){a.boardDeselected(),a.loadLists(null,function(){a.setBackground(!0),a.props.trelloHandler.getListTaskData(a.state.selectedBoard.id,a.loadLists)})},a.boardDeselected=function(){a.setBackground(!1),a.props.trelloHandler.resetTaskData()},a.setBackground=function(e){e?a.state.selectedBoard&&(document.body.style.backgroundImage="url("+a.state.selectedBoard.prefs.backgroundImage+")"):document.body.style.backgroundImage="none"},a.loadLists=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};a.setState({lists:e},t)},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"generateBoard",value:function(){return o.a.createElement(j,{lists:this.state.lists})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(p,{trelloHandler:this.props.trelloHandler,onSelect:this.handleSelect}),this.state.lists&&this.generateBoard())}}]),t}(n.Component),D=function e(t){var a=this;Object(l.a)(this,e),this.authorize=function(e){a.Trello.authorize({type:"popup",name:"mello.",scope:{read:!0,write:!0},expiration:"never",success:function(){e(!0),this.authorized=!0,console.log("Authorization Successful")}.bind(a),error:function(){e(!1),console.log("Authorization Failed")}})},this.getMember=function(e){a.Trello.get("/members/me",function(t){e(t),console.log("User loaded succesfully")},function(){console.log("Failed to load member")})},this.loadBoards=function(e){a.Trello.get("/members/me/boards?filter=open",function(t){console.log("Boards loaded"),e(t),this.boards=t}.bind(a),function(){console.log("Failed to load boards")})},this.getBoard=function(e,t,n){"-1"!==e?a.Trello.get("/boards/"+e,function(e){t(e)},function(){console.log("Failed to get board: "+e)}):n()},this.resetTaskData=function(){a.taskData={tasks:{},columns:{},columnOrder:[]}},this.getListTaskData=function(e,t){a.resetTaskData(),a.Trello.get("/boards/"+e+"/lists",function(e){console.log("Lists loaded succesfully"),this.getTasksFromLists(e,t)}.bind(a),function(){console.log("Failed to load lists")})},this.getTasksFromLists=function(e,t){0===e.length&&(t(a.taskData),console.log("Successfully parsed list/task data")),console.log("Getting Tasks");var n=0;e.forEach(function(o){a.Trello.get("/lists/"+o.id+"/cards",function(a){this.processTaskData(Object(f.a)({},o,{tasks:a})),++n===e.length&&(t(this.taskData),console.log("Successfully parsed list/task data"))}.bind(a),function(){console.log("Failed to load cards")})})},this.processTaskData=function(e){a.taskData.columns[e.id]=Object(f.a)({},e,{taskIds:[]}),e.tasks.forEach(function(t){a.taskData.columns[e.id].taskIds.push(t.id),a.taskData.tasks[t.id]=Object(f.a)({},t)}),a.taskData.columnOrder.push(e.id)},this.Trello=t,this.authorized=!1,this.boards=null,this.member=null,this.taskData={tasks:{},columns:{},columnOrder:[]}},w=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).Trello=new D(window.Trello),a.state={authorized:!1},a.onLogin=function(){console.log("Login Request"),a.Trello.authorize(a.verifyAuthorize)},a.verifyAuthorize=function(e){e&&a.setState({authorized:!0})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return this.state.authorized?o.a.createElement(E,{trelloHandler:this.Trello}):o.a.createElement(m,{onLogin:this.onLogin})}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},44:function(e,t,a){e.exports=a(103)},51:function(e,t,a){},53:function(e,t,a){},55:function(e,t,a){},57:function(e,t,a){},59:function(e,t,a){},99:function(e,t,a){}},[[44,2,1]]]);
//# sourceMappingURL=main.a3900a2d.chunk.js.map