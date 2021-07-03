import React from "react"
import Title from "./Title"

export default class Newsletters extends React.Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
            status: ""
        };
    }

    render() {
        const { status } = this.state
        return (
            <section className="newsletters-page">
                <Title title="Newsletters" />
                {/* <div className="newsletters-page"> */}
                    <article className="newsletters-form">
                        <form action="https://formspree.io/mdowqoov" method="POST" onSubmit={this.submitForm}>
                            <div className="form-group">
                                <input
                                    type="email"
                                    placeholder="email"
                                    name="email"
                                    className="form-control"
                                />
                                {status === "SUCCESS" ? <p className="success-message">Thank You! You have successfully subscribed.</p> : <button type="submit" className="submit-btn btn">Subscribe Now</button>}
                                {status === "ERROR" && <p className="error-message">Oopsy, El Cucuy Error</p>}
                            </div>
                        </form>
                    </article>
                {/* </div> */}
            </section>
        )
    }

    submitForm(ev) {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                this.setState({ status: "SUCCESS" });
            } else {
                this.setState({ status: "ERROR" });
            }
        };
        xhr.send(data);
    }
}

