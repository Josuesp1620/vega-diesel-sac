import { Link } from "react-router-dom";

export default function Breadcrumb({ breadcrumbTitle }) {
    return (
        <>
            
            {/*page-title */}
            <section className="page__title p_relative">
                <div className="bg-layer parallax-bg" data-parallax='{"y": 20}' style={{backgroundImage: 'url(assets/images/resource/page-title.png)'}}>
                </div>
                <div className="auto_container text-center">
                    <div className="content-box p_relative">
                        <h1 className="title"> {breadcrumbTitle} </h1>
                        <ul className="bread-crumb">
                            <li><Link to="/">Home </Link></li>
                            <li><span> -</span>{breadcrumbTitle}</li>
                        </ul>
                    </div>
                </div>
            </section>
            {/*page-title end */}

        </>
    )
}
