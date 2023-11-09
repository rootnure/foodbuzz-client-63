import { Helmet } from "react-helmet-async";

const Blog = () => {
    return (
        <>
            <Helmet>
                <title>Foodbuzz | Blog</title>
            </Helmet>
            <section className="my-12">
                <div className="divider my-16 text-3xl font-bold">Blog</div>
                <div className="grid grid-cols-3 gap-4">
                    <div className="card card-compact bg-base-100 shadow-xl">
                        <figure className="h-60">
                            <img src="https://www.tutlane.com/images/angularjs/angularjs-one-way-data-binding.png" alt="One way data binding" className="h-full" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-2xl">What is One way data binding?</h2>
                            <p className="text-justify">One-way means that the binding happens in one direction. Means, changes in the data automatically update the UI, but changes in the UI do not automatically update the data. That&apos;s why it is referred to as one-way data binding. React achieves one-way data binding by using state and props.</p>
                        </div>
                    </div>
                    <div className="card card-compact bg-base-100 shadow-xl">
                        <figure className="h-60"><img src="https://cdn.buttercms.com/NFhF3dWBTf5wPnfTsdjR" alt="NPM" className="h-full" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-2xl">What is NPM in node.js?</h2>
                            <p>Node Package Manager (NPM) is a <strong>package manager for Node.js packages</strong>, or module if you like. It is written entirely in JavaScript. It was developed by Isaac Z. Schlueter.</p>
                        </div>
                    </div>
                    <div className="card card-compact bg-base-100 shadow-xl">
                        <figure className="h-60"><img src="https://cdn.educba.com/academy/wp-content/uploads/2018/09/MySQL-vs-MongoDB.jpg" alt="MongoDB vs mySQL" className="h-full" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-2xl">Different between Mongodb database vs mySQL database.</h2>
                            <table>
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>MySQL</th>
                                        <th>MongoDB</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="pr-1 font-bold">1.</td>
                                        <td className="pr-1">Represents data as tables & rows</td>
                                        <td>Represents data as JSON docs/collection</td>
                                    </tr>
                                    <tr>
                                        <td className="pr-1 font-bold">2.</td>
                                        <td className="pr-1">Must specify tables & columns</td>
                                        <td>Don&apos;t need to declare the schema</td>
                                    </tr>
                                    <tr>
                                        <td className="pr-1 font-bold">3.</td>
                                        <td className="pr-1">Allows join operations</td>
                                        <td>Doesn&apos;t allow join operations</td>
                                    </tr>
                                    <tr>
                                        <td className="pr-1 font-bold">4.</td>
                                        <td className="pr-1">Utilizes structured query language</td>
                                        <td>Query language is JavaScript</td>
                                    </tr>
                                    <tr>
                                        <td className="pr-1 font-bold">5.</td>
                                        <td className="pr-1">Best for cloud-based services</td>
                                        <td>Best data security is your priority</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Blog;