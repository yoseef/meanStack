var app=angular.module("app",["ngResource"]);angular.module("app").controller("LlibreCtrl",["$scope","LlibresFactory",function(e,l){var r={titol:"",isbn:"",autors:[],date:new Date};e.llibres=[];var t=function(){e.llibres=l.query(function(l){e.llibres=l})};e.llibre=Object.create(r),e.SelectedLlibre,t(),e.addLlibre=function(){""!=e.llibre.titol&&""!=e.llibre.isbn&&l.save(e.llibre,function(){console.log("s'ha guardat"),t(),e.netejarCamps()},function(e){console.log("Error"+e)})},e.updateLlibre=function(){""!=e.SelectedLlibre.titol&&""!=e.SelectedLlibre.isbn&&l.update(e.SelectedLlibre,function(){console.log("updated"),e.SelectedLlibre=Object.create(r),e.SelectedLlibre.autors=[],t()})},e.removeLlibre=function(){""!=e.SelectedLlibre.titol&&""!=e.SelectedLlibre.isbn&&l["delete"]({id:e.SelectedLlibre.isbn},function(){e.SelectedLlibre=Object.create(r),e.SelectedLlibre.autors=[],t()})},e.netejarCamps=function(){e.llibre=Object.create(r),e.llibre.autors=[]},e.llibreSeleccionat=function(l){e.SelectedLlibre=e.llibres[l]}}]),angular.module("app").factory("LlibresFactory",["$resource",function(e){return e("/api/llibres/:id",null,{update:{method:"PUT"}})}]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZS5qcyIsImxsaWJyZXMuY3RybC5qcyIsImxsaWJyZXMuZmFjdG9yeXMuanMiXSwibmFtZXMiOlsiYXBwIiwiYW5ndWxhciIsIm1vZHVsZSIsImNvbnRyb2xsZXIiLCIkc2NvcGUiLCJMbGlicmVzRmFjdG9yeSIsImxsaWJyZSIsInRpdG9sIiwiaXNibiIsImF1dG9ycyIsImRhdGUiLCJEYXRlIiwibGxpYnJlcyIsImFjdHVhbGl0emFyIiwicXVlcnkiLCJlbnRyaWVzIiwiT2JqZWN0IiwiY3JlYXRlIiwiU2VsZWN0ZWRMbGlicmUiLCJhZGRMbGlicmUiLCJzYXZlIiwiY29uc29sZSIsImxvZyIsIm5ldGVqYXJDYW1wcyIsImVycm9yIiwidXBkYXRlTGxpYnJlIiwidXBkYXRlIiwicmVtb3ZlTGxpYnJlIiwiaWQiLCJsbGlicmVTZWxlY2Npb25hdCIsImlueCIsImZhY3RvcnkiLCIkcmVzb3VyY2UiLCJtZXRob2QiXSwibWFwcGluZ3MiOiJBQUFBLEdBQUFBLEtBQUFDLFFBQUFDLE9BQUEsT0FBQSxjQ0FBRCxTQUFBQyxPQUFBLE9BQ0FDLFdBQUEsY0FBQSxTQUFBLGlCQUFBLFNBQUFDLEVBQUFDLEdBQ0EsR0FBQUMsSUFDQUMsTUFBQSxHQUNBQyxLQUFBLEdBQ0FDLFVBQ0FDLEtBQUEsR0FBQUMsTUFHQVAsR0FBQVEsVUFFQSxJQUFBQyxHQUFBLFdBQ0FULEVBQUFRLFFBQUFQLEVBQUFTLE1BQUEsU0FBQUMsR0FDQVgsRUFBQVEsUUFBQUcsSUFHQVgsR0FBQUUsT0FBQVUsT0FBQUMsT0FBQVgsR0FFQUYsRUFBQWMsZUFFQUwsSUFFQVQsRUFBQWUsVUFBQSxXQUNBLElBQUFmLEVBQUFFLE9BQUFDLE9BQUEsSUFBQUgsRUFBQUUsT0FBQUUsTUFDQUgsRUFBQWUsS0FBQWhCLEVBQUFFLE9BQUEsV0FDQWUsUUFBQUMsSUFBQSxnQkFDQVQsSUFDQVQsRUFBQW1CLGdCQUNBLFNBQUFDLEdBQ0FILFFBQUFDLElBQUEsUUFBQUUsTUFJQXBCLEVBQUFxQixhQUFBLFdBQ0EsSUFBQXJCLEVBQUFjLGVBQUFYLE9BQUEsSUFBQUgsRUFBQWMsZUFBQVYsTUFDQUgsRUFBQXFCLE9BQUF0QixFQUFBYyxlQUFBLFdBQ0FHLFFBQUFDLElBQUEsV0FDQWxCLEVBQUFjLGVBQUFGLE9BQUFDLE9BQUFYLEdBQ0FGLEVBQUFjLGVBQUFULFVBQ0FJLE9BSUFULEVBQUF1QixhQUFBLFdBQ0EsSUFBQXZCLEVBQUFjLGVBQUFYLE9BQUEsSUFBQUgsRUFBQWMsZUFBQVYsTUFDQUgsRUFBQUEsV0FDQXVCLEdBQUF4QixFQUFBYyxlQUFBVixNQUNBLFdBQ0FKLEVBQUFjLGVBQUFGLE9BQUFDLE9BQUFYLEdBQ0FGLEVBQUFjLGVBQUFULFVBQ0FJLE9BS0FULEVBQUFtQixhQUFBLFdBQ0FuQixFQUFBRSxPQUFBVSxPQUFBQyxPQUFBWCxHQUNBRixFQUFBRSxPQUFBRyxXQUVBTCxFQUFBeUIsa0JBQUEsU0FBQUMsR0FDQTFCLEVBQUFjLGVBQUFkLEVBQUFRLFFBQUFrQixPQzVEQTdCLFFBQUFDLE9BQUEsT0FDQTZCLFFBQUEsa0JBQUEsWUFBQSxTQUFBQyxHQUNBLE1BQUFBLEdBQUEsbUJBQUEsTUFDQU4sUUFDQU8sT0FBQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgYXBwID0gYW5ndWxhci5tb2R1bGUoJ2FwcCcsIFsnbmdSZXNvdXJjZSddKTtcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxuICAuY29udHJvbGxlcignTGxpYnJlQ3RybCcsIGZ1bmN0aW9uKCRzY29wZSwgTGxpYnJlc0ZhY3RvcnkpIHtcbiAgICB2YXIgbGxpYnJlID0ge1xuICAgICAgdGl0b2w6IFwiXCIsXG4gICAgICBpc2JuOiBcIlwiLFxuICAgICAgYXV0b3JzOiBbXSxcbiAgICAgIGRhdGU6IG5ldyBEYXRlKClcbiAgICB9XG5cbiAgICAkc2NvcGUubGxpYnJlcyA9IFtdO1xuXG4gICAgdmFyIGFjdHVhbGl0emFyID0gZnVuY3Rpb24oKSB7XG4gICAgICAkc2NvcGUubGxpYnJlcyA9IExsaWJyZXNGYWN0b3J5LnF1ZXJ5KGZ1bmN0aW9uKGVudHJpZXMpIHtcbiAgICAgICAgJHNjb3BlLmxsaWJyZXMgPSBlbnRyaWVzO1xuICAgICAgfSk7XG4gICAgfVxuICAgICRzY29wZS5sbGlicmUgPSBPYmplY3QuY3JlYXRlKGxsaWJyZSk7XG5cbiAgICAkc2NvcGUuU2VsZWN0ZWRMbGlicmU7XG5cbiAgICBhY3R1YWxpdHphcigpO1xuXG4gICAgJHNjb3BlLmFkZExsaWJyZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKCRzY29wZS5sbGlicmUudGl0b2wgIT0gXCJcIiAmJiAkc2NvcGUubGxpYnJlLmlzYm4gIT0gXCJcIikge1xuICAgICAgICBMbGlicmVzRmFjdG9yeS5zYXZlKCRzY29wZS5sbGlicmUsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwicydoYSBndWFyZGF0XCIpO1xuICAgICAgICAgIGFjdHVhbGl0emFyKCk7XG4gICAgICAgICAgJHNjb3BlLm5ldGVqYXJDYW1wcygpO1xuICAgICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3JcIiArIGVycm9yKTtcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gICAgJHNjb3BlLnVwZGF0ZUxsaWJyZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKCRzY29wZS5TZWxlY3RlZExsaWJyZS50aXRvbCAhPSBcIlwiICYmICRzY29wZS5TZWxlY3RlZExsaWJyZS5pc2JuICE9IFwiXCIpIHtcbiAgICAgICAgTGxpYnJlc0ZhY3RvcnkudXBkYXRlKCRzY29wZS5TZWxlY3RlZExsaWJyZSwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ3VwZGF0ZWQnKVxuICAgICAgICAgICRzY29wZS5TZWxlY3RlZExsaWJyZSA9IE9iamVjdC5jcmVhdGUobGxpYnJlKTtcbiAgICAgICAgICAkc2NvcGUuU2VsZWN0ZWRMbGlicmUuYXV0b3JzID0gW107XG4gICAgICAgICAgYWN0dWFsaXR6YXIoKTtcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gICAgJHNjb3BlLnJlbW92ZUxsaWJyZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKCRzY29wZS5TZWxlY3RlZExsaWJyZS50aXRvbCAhPSBcIlwiICYmICRzY29wZS5TZWxlY3RlZExsaWJyZS5pc2JuICE9IFwiXCIpIHtcbiAgICAgICAgTGxpYnJlc0ZhY3RvcnkuZGVsZXRlKHtcbiAgICAgICAgICBpZDogJHNjb3BlLlNlbGVjdGVkTGxpYnJlLmlzYm5cbiAgICAgICAgfSwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgJHNjb3BlLlNlbGVjdGVkTGxpYnJlID0gT2JqZWN0LmNyZWF0ZShsbGlicmUpO1xuICAgICAgICAgICRzY29wZS5TZWxlY3RlZExsaWJyZS5hdXRvcnMgPSBbXTtcbiAgICAgICAgICBhY3R1YWxpdHphcigpO1xuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgICRzY29wZS5uZXRlamFyQ2FtcHMgPSBmdW5jdGlvbigpIHtcbiAgICAgICRzY29wZS5sbGlicmUgPSBPYmplY3QuY3JlYXRlKGxsaWJyZSk7XG4gICAgICAkc2NvcGUubGxpYnJlLmF1dG9ycyA9IFtdO1xuICAgIH1cbiAgICAkc2NvcGUubGxpYnJlU2VsZWNjaW9uYXQgPSBmdW5jdGlvbihpbngpIHtcbiAgICAgICRzY29wZS5TZWxlY3RlZExsaWJyZSA9ICRzY29wZS5sbGlicmVzW2lueF07XG4gICAgfVxuICB9KTtcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxuICAuZmFjdG9yeSgnTGxpYnJlc0ZhY3RvcnknLCBmdW5jdGlvbigkcmVzb3VyY2UpIHtcbiAgICByZXR1cm4gJHJlc291cmNlKFwiL2FwaS9sbGlicmVzLzppZFwiLCBudWxsLCB7XG4gICAgICAndXBkYXRlJzoge1xuICAgICAgICBtZXRob2Q6ICdQVVQnXG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9