import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function App() {
  return (
    <div className="container">
    <div className="row div col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <div className="row g-3">
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
               <label for="NAME" className="form-label">NAME</label>
                <input placeholder="enter name" type="text" className="form-control"/>
            </div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
             <label for="ROLL NO" className="form-label">ROLL NO</label>
             <input placeholder="enter roll no" type="text" className="form-control"/>
            </div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label for="ADDRESS" className="form-label">ADDRESS</label>
                <input placeholder="enter address" type="text" className="form-control"/>
            </div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label for="MOBILE NO " className="form-label">MOBILE NO</label>
                <input   placeholder="enter mob no" type="text" className="form-control"/>

            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label for="COLLEGE" className="form-label">COLLEGE</label>
                <input placeholder="enter college" type="text" className="form-control"/>
            </div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
             <label for="USERNAME" className="form-label">USERNAME</label>
             <input placeholder="username" type="text" className="form-control"/>
            </div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
             <label for="PASSWORD" className="form-label">PASSWORD</label>
             <input placeholder="password" type="text" className="form-control"/>
            </div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <button className="btn btn-danger">REGISTER</button>
                
            </div>
            
        </div>
    </div>
</div>
  );
}

export default App;
