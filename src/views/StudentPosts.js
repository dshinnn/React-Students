export default function StudentPosts(props) {

    return (
        <>
            <div className="carousel-item">
                <div className="card">
                    <div className="card-body text-center bg-primary text-light border border-secondary rounded-3">
                        <h1 className="card-title my-2">{props.post.title}</h1>
                        <hr/>
                        <h6 className="card-text">{props.post.body} <span className="fst-italic">{`- ${props.post.user.first_name} ${props.post.user.last_name} (${props.post.id}) `}</span></h6>
                        <h6 className="card-subtitle mb-3"></h6>
                        <h6 className="card-subtitle text-white-50 fw-light">{props.post.date_created}</h6>
                    </div>
                </div>
            </div>
        </>
    )
}