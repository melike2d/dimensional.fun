import { useMDXComponent } from 'next-contentlayer/hooks';
import React, { PropsWithChildren } from 'react';
import { allBlogs } from '.contentlayer/data';
import type { Blog } from '.contentlayer/types';
import Layout from 'ui/layout';
import Head from 'next/head';
import Header from 'components/header';

export async function getStaticPaths() {
	return {
		paths: allBlogs.map((p) => ({ params: { slug: p.slug } })),
		fallback: false
	};
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
	const post = allBlogs.find((post) => post.slug === params.slug);

	return { props: { post } };
}

function code({ className, children }: PropsWithChildren<{ className: string }>) {
	console.log(className);
	return (
		<>
		{children}
		</>
	);
}

export default function BlogPost({ post }: { post: Blog }) {
	const Component = useMDXComponent(post.body.code);

	return (
		<Layout title={post.title} description={post.subtitle}>
			<div className="space-y-6 ">
				<Header title={post.title} />

				<div className="max-w-lg prose prose-invert prose-headings:mt-2 prose-hr:my-10">
					<Component components={{ code }} />
				</div>
			</div>
		</Layout>
	);
}