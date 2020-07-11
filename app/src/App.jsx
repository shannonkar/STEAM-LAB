import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import CourseInformation from './CourseInformation'
import TrackList from './components/TrackList'
import Form from './components/Form';


class App extends Component{
constructor(props){
super(props) 
}
render() {
return(
<div className = "container">
<LandingPage />
<TrackList CourseInformation = {CourseInformation} />
<ContactUs />

<div>
<LandingPage /> 

<Footer />

</div>
</div>
);
}
}

export default App;