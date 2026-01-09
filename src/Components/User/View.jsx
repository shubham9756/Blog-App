import  { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Comment from './Comment'

const View = ({ user }) => {
  const [data, setData] = useState(null)
  const { id } = useParams()
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        await fetch(`https://blog-appbackend.vercel.app/viewBlog/${id}`, {
          method: 'GET',
          credentials: 'include',
        }).then(res => res.json())
          .then((data) => {
            setData(data.blog);
            console.log(data);
          })
          .catch(err => console.log(err));
      } catch (error) {
        console.error('Error fetching blog:', error);
      }
    };
    fetchBlog();
  }, [])
  return (
    <>


      <main className="container my-5">

        <div className="row justify-content-center">

          <div className="col-md-8">

            <article className="card shadow-sm">
              <div className="card-body p-4">

                <h1 className="fw-bold mb-3">{data?.title}</h1>

                <div className="text-muted small mb-4">
                  By <strong>{data?.author}</strong> |
                  {data?.createdAt ? new Date(data.createdAt).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric'
                  }) : "No date"} |
                  Category: <span className="badge bg-primary ">{data?.category}</span>
                </div>

                <div className="mb-4">
                  <div className="bg-secondary rounded d-flex align-items-center justify-content-center"
                    style={{ "height": "250px" }}>
                    <span className="text-white">
                      {data?.thumbnail ? (
                        <img
                          src={`https://blog-appbackend.vercel.app/upload/${data.thumbnail}`}
                          alt={data.title}
                          className="img-fluid"
                          style={{ "height": "250px" }}
                        />
                      ) : (
                        "No Image"
                      )}
                    </span>
                  </div>
                </div>

                <div
                  className="blog-content"
                  dangerouslySetInnerHTML={{ __html: data?.content }}
                />
              </div>
            </article>

            <div className="d-flex gap-3 mt-3">
              <a href="/blogs" className="btn btn-primary ">← Back to Blogs</a>
            </div>
              <Comment blogId={data?._id} user={user}/>
          </div>
        </div>
      </main>
    </>
  )
}

export default View
