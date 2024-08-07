/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const PBlogCard = ({ blog }) => {
    return (

        <div className="card card-compact bg-base-100 shadow-xl">
            <figure className="" style={{ height: '220px', width: '100%', overflow: 'hidden' }}>
                <img
                    src={blog.image}
                    className="block object-cover rounded-lg h-full w-full "
                />

            </figure>
            <div className="card-body text-center">
               <div className="flex justify-center">
               <h2 className="card-title ">{blog.title.slice(0,50)}</h2>
               </div>
                <p>{blog.content.slice(0,90)}.....</p>
                <div className="card-actions justify-center">
                    <Link to={`/public-blog-details/${blog._id}`} className=" px-8 btn transition-colors duration-300 transform  text-rose-100 badge bg-[#5D0911] hover:bg-rose-100 rounded-md text-xl hover:text-[#5D0911]">Read More</Link>
                </div>
            </div>
        </div>

    );
};

export default PBlogCard;