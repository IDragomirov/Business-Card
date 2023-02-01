import React from "react"

export default function About() {
    return (
        <main>
            <img className="UserPhoto" src="./components/Photo" />
            <div className="description">
                <h3>Ivan Dragomirov </h3>
                <p className="job">Frontend Developer</p>
            </div>
            <div className="button--container">
                <button className="e-mail"><p><i className="fa fa-envelope" aria-hidden="true"></i>
                    E-mail</p></button>
                <button className="linked"><p><i className="fab fa-linkedin"></i>LinkedIn </p></button>
            </div>
            <div className="more--about--me">
            <h1>About me</h1>
            <p>Hello, my name is Ivan !
            I am 28 years old educator who decided to make a change.
             A year ago I took the decision to study programming.
             I was fascinated how number of rows can create something that
             is "alive". So I spent more and more of my time learning and trying
             to create different content. The challenges I got from the course were
             really interesting and they kept me motivated.
             </p>
            </div>
        </main>
    )
}