import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function App() {
  return (
    <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
         <div className="container">
             <div className="row g-3">
                 <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                  <label for="USERNAME" className="form-label">USERNAME</label>
                  <input placeholder="enter username" type="text" className="form-control"/>
                 </div>
                 <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                 <label for="PASSWORD" className="form-label">PASSWORD</label>
                 <input placeholder="enter password" type="text" className="form-control"/>
                 </div>
                 <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                   <button className="btn btn-danger">LOGIN</button>
                 </div>
             </div>
         </div>



        </div>
    </div>
</div>
  );
}

export default App;
