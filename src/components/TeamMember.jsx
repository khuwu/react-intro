function TeamMember(props){
    return(

        <div className="team-card">

            <div className="avatar">
                {props.emoji}
            </div>

            <h2>{props.name}</h2>

            <h3>{props.role}</h3>

            <button>View Profile</button>

        </div>

    );
}

export default TeamMember;