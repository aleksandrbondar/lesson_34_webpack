export default class Post {
  constructor(title, logo, img) {
    this.title = title;
    this.date = new Date();
    this.logo = logo;
    this.img = img ?? "";
  }

  toString() {
    return JSON.stringify(
      {
        title: this.title,
        date: this.date.toJSON(),
        logo: this.logo,
        img: this.img,
      },
      null,
      2,
    );
  }
}
