//Filter article

export const FilterPost = (setState, articles, word) => {
	const newPosts = articles.map((article) => {
		for (let post of article.tag_list) {
			if (post === word) {
				return article;
			}
		}
	});

	for (let newPost of newPosts) {
		if (newPost !== undefined) {
			setState((prevState) => [...prevState, newPost]);
		}
	}
};
