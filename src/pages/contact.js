import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

export default class contact extends React.Component {
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
            <Layout>
                <SEO title="Contact" />
                <section className="contact-page">
                    <article className="contact-form">
                        <h3>get in touch</h3>
                        <form action="https://formspree.io/mwkrgkkr" method="POST" onSubmit={this.submitForm}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="name"
                                    className="form-control"
                                />
                                <input
                                    type="email"
                                    placeholder="email"
                                    name="email"
                                    className="form-control"
                                />
                                <textarea
                                    name="message"
                                    rows="5"
                                    placeholder="message"
                                    className="form-control"
                                ></textarea>
                            </div>
                            {status === "SUCCESS" ? <p className="success-message">Thank You!</p> : <button type="submit" className="submit-btn btn">submit here</button>}
                            {status === "ERROR" && <p className="error-message">Oopsy, El Cucuy Error</p>}
                        </form>
                    </article>
                </section>
            </Layout>
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

