(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(21)},15:function(e,t,n){},19:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(9),s=n.n(i),c=(n(15),n(1)),o=n.n(c),l=n(7),d=n(2),u=n(3),k=n(5),m=n(4),h=n(6),p=(n(19),function(e){function t(){return Object(d.a)(this,t),Object(k.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"search"},a.a.createElement("form",{className:"searchForm",onSubmit:this.props.searchDrink},a.a.createElement("input",{autoComplete:"off",className:"searchInput",name:"drinkText",type:"text",placeholder:"Search a Drink..."}),a.a.createElement("button",{className:"searchButton"})))}}]),t}(a.a.Component)),f=function(e){return a.a.createElement("div",{className:"card",onClick:function(t){t.preventDefault(),e.selectDrink(e.idDrink)}},a.a.createElement("div",{className:"cardHeader"},e.strDrink),a.a.createElement("img",{className:"cardImg",alt:"thumbnail",src:e.strDrinkThumb}))},v=function(e){return a.a.createElement("div",{className:"results"},a.a.createElement("div",{className:"resultsHeader"}),a.a.createElement("div",{className:e.drinkArray?"cardList":"cardListNull"},e.drinkArray&&e.drinkArray.map(function(t){return a.a.createElement(f,{strDrink:t.strDrink,strDrinkThumb:t.strDrinkThumb,idDrink:t.idDrink,selectDrink:e.selectDrink,key:t.idDrink})})))},D=function(e){var t=e.drink&&e.drink.drinks[0];return a.a.createElement("div",{className:"drink"},e.drink&&a.a.createElement("div",{className:"drinkBody"},a.a.createElement("div",{className:"drinkHeader"},t.strDrink),a.a.createElement("div",{className:"drinkDirections"},t.strInstructions),a.a.createElement("div",{className:"drinkIngredients"},a.a.createElement("ul",null,e.ingredients.map(function(e){return a.a.createElement("li",{key:Date.now()+e},e)})))))},w=function(e){function t(){var e,n;Object(d.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=Object(k.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(a)))).state={drinkArray:[],ingredients:void 0,selectedDrink:void 0},n.searchDrink=function(){var e=Object(l.a)(o.a.mark(function e(t){var r,a,i;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),r=t.target.elements.drinkText.value,e.next=4,fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=".concat(r));case 4:return a=e.sent,e.next=7,a.json();case 7:i=e.sent,console.log(i.drinks),n.setState({drinkArray:i.drinks});case 10:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),n.selectDrink=function(){var e=Object(l.a)(o.a.mark(function e(t){var r,a,i,s,c,l,d,u;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=".concat(t));case 3:return r=e.sent,e.next=6,r.json();case 6:for(c in a=e.sent,console.log(a),i=[],s=[],a.drinks[0])c.includes("strIngredient")&&""!==a.drinks[0][c]&&null!==a.drinks[0][c]&&i.push(a.drinks[0][c]);for(l in a.drinks[0])l.includes("strMeasure")&&(null!==a.drinks[0][l]&&a.drinks[0][l].match(/[a-z]/i)?s.push("- "+a.drinks[0][l]):s.push(" "));for(d=[],u=0;u<i.length;u++)d.push(i[u]+" "+s[u]);n.setState({selectedDrink:a,ingredients:d});case 15:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"app"},a.a.createElement(p,{searchDrink:this.searchDrink}),a.a.createElement(v,{drinkArray:this.state.drinkArray,selectDrink:this.selectDrink}),a.a.createElement(D,{drink:this.state.selectedDrink,ingredients:this.state.ingredients}))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(a.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,2,1]]]);
//# sourceMappingURL=main.f5b271c7.chunk.js.map