const Projects=()=>(
    <section className="container p-10 bg-grey-100 text-center">
        <div className="box">
            <h2 className="text-3xl font-bold mb-4">
                Projects
            </h2>
        <div className="grid gap-4 sm:grid-cols-2">
            {/* Project-1 */}
            <div className="p-4 bg-white shadow rounded">
                <h3 className="font-semibold">Project-1</h3>
                <p>Flipkart is an Indian e-commerce platform that offers online shopping and home delivery of a wide range of products, including electronics, fashion, home essentials, groceries, and more. Customers can browse, order, and pay online, with delivery services available across India.</p>
            </div>
            {/* Project-2 */}
            <div className="p-4 bg-white shadow rounded">
                <h3 className="font-semibold">Project-2</h3>
                <p>An eLibrary provides online access to books, allowing users to borrow, read, and manage digital resources anytime, anywhere. It supports e-reading, research, and learning through a virtual platform.</p>
            </div>
            {/* Project-3 */}
            <div className="p-4 bg-white shadow rounded">
                <h3 className="font-semibold">Project-3</h3>
                <p>Petstore is an online platform that allows users to adopt pets or donate them for adoption, helping connect animals with loving homes quickly and easily.</p>
            </div>
        </div>
        </div>
    </section>
)

export default Projects