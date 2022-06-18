import { createElem } from "./createElem.js";

const loadImg = (url, description) => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.width = 200;
        img.src = url;
        img.alt = description;
        img.addEventListener("load", () => {
            resolve(img)
        });
        img.addEventListener("error", (error) => {
            reject(new Error(error))
        });
    });
};

export const createCardPhoto = async (data) => {
    const card = createElem("li", {
        className : "card"
    });

    const cardItem = createElem("a", {
        id : data.id,
        className : "grid-item",
        href : `page.html?photo=${data.id}`
    });

    const photo = await loadImg(data.urls.small, data.description);

    const author = createElem("a", {
        className : "card__author",
        href : data.user.links.html
    });

    const avatarAutor = new Image();
    avatarAutor.className = "author__photo";
    avatarAutor.with = "32";
    avatarAutor.height = "32";
    avatarAutor.src = data.user.profile_image.medium;
    avatarAutor.alt = data.user.bio;
    avatarAutor.title = data.user.username;

    author.append(avatarAutor);

    const likeBtn = createElem("button", {
        className : "card__photo-like",
        textContent : data.likes
    });

    const downloadLink = createElem("a", {
        className : "card__download",
        href : data.links.download,
        download : true,
        target : "_blank"
    });

    cardItem.append(photo, author, likeBtn, downloadLink);
    card.append(cardItem);

    return card;
};
