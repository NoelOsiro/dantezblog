'use client'
import Menu from "@/components/Menu/Menu";
import styles from "./singlePage.module.css";
import Image from "next/image";
import Comments from "@/components/comments/Comments";
import { FC, useEffect, useState } from "react";

interface UserData {
    name: string;
    img: string;
}

interface PostData {
    title: string;
    user: UserData;
    img?: string;
    desc: string;
}

interface BlogPageProps {
    params: {
        slug: string;
    };
}

const getData = async (slug: string): Promise<PostData> => {
    try {
        const res = await fetch(`http://localhost:3001/posts?slug=${slug}`, {
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("Failed to fetch data");
        }

        const postData: PostData[] = await res.json();
        if (postData.length === 0) {
            throw new Error("Post not found");
        }

        return postData[0]; // Assuming only one post is returned with the given slug
    } catch (error) {
        throw new Error("Failed to fetch data");
    }
};


const SinglePage: FC<BlogPageProps> = ({ params }) => {
    const { slug } = params;
    const [data, setData] = useState<PostData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const postData = await getData(slug);
                setData(postData);
            } catch (error: any) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();

        // Cleanup function to cancel fetch if component unmounts before data is fetched
        return () => {
            // Cleanup logic if needed
        };
    }, [slug]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!data) {
        return <div>No data found for this post.</div>;
    }

    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>{data.title}</h1>
                    <div className={styles.user}>
                        {data.user && data.user.img && (
                            <div className={styles.userImageContainer}>
                                <Image src={data.user.img} alt="" fill className={styles.avatar} />
                            </div>
                        )}

                        <div className={styles.userTextContainer}>
                            <span className={styles.username}>{data.user.name}</span>
                            <span className={styles.date}>01.01.2024</span>
                        </div>
                    </div>
                </div>
                {data.user.img && (
                    <div className={styles.imageContainer}>
                        <Image src={data.user.img} alt="" fill className={styles.image} />
                    </div>
                )}
            </div>
            <div className={styles.content}>
                <div className={styles.post}>
                    <div
                        className={styles.description}
                        dangerouslySetInnerHTML={{ __html: data.desc }}
                    />
                    <div className={styles.comment}>
                            <Comments postSlug={slug}/>
                    </div>
                </div>
                <Menu />
            </div>
        </div>
    );
};

export default SinglePage;
