const app = document.getElementById('app');
const root = ReactDOM.createRoot(app);

function Header(props){
    return <>
        <h1>Develop. Preview. Ship.</h1>
        <h2>code, code, code</h2>
        <h3>{props.title}: {props.message}</h3>
    </>
}


function Content(){
    const [likes, setLikes] = React.useState(5);
    const [liked, setliked] = React.useState(false)
    function handleClick(){
        if (liked) {
            setLikes(likes - 1)
            setliked(false)
        } else {
            setLikes(likes +1)
            setliked(true)
        }
        
    }
    return <button onClick={handleClick}>Like ({likes})</button>


}


   



root.render(
    <>
    <Header title='react' message ='hi'/>
    <Content/>
    </>

    );