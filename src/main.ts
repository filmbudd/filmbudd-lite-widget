import { attachWidget, MidLineEllipsis, ErrorFace } from "./widget";

import "./style.css";
import * as classes from "./widget.module.css";

function main() {
  const app = document.querySelector<HTMLDivElement>("#app")!;

  attachWidget(
    document,
    app,
    {
      cn_url: "https://movie.douban.com/subject/1293908/",
      cn_rating: "8.1",
      im_url: "https://www.imdb.com/title/tt0021749/",
      im_rating: "7.0",
    },
    classes
  );

  attachWidget(
    document,
    app,
    {
      im_url: "https://www.imdb.com/title/tt0021749/",
      im_rating: "7.0",
    },
    classes
  );

  attachWidget(
    document,
    app,
    {
      cn_url: "https://movie.douban.com/subject/1293908/",
      cn_rating: "8.1",
    },
    classes
  );

  attachWidget(
    document,
    app,
    {
      cn_url: "",
      cn_rating: MidLineEllipsis,
      im_url: "https://www.imdb.com/title/tt0021749/",
      im_rating: "7.0",
    },
    classes
  );

  attachWidget(
    document,
    app,
    {
      cn_url: "",
      cn_rating: "9.2",
      im_url: "",
      im_rating: MidLineEllipsis,
    },
    classes
  );

  attachWidget(
    document,
    app,
    {
      cn_url: "",
      cn_rating: "2.3",
      im_url: "",
      im_rating: ErrorFace,
    },
    classes
  );

  attachWidget(
    document,
    app,
    {
      cn_url: "",
      cn_rating: "MISS",
      im_url: "",
      im_rating: "---",
    },
    classes
  );

  attachWidget(
    document,
    app,
    {
      cn_url: "",
      cn_rating: "缺",
      im_url: "",
      im_rating: "---",
    },
    classes
  );

  attachWidget(
    document,
    document.querySelector<HTMLTitleElement>("h1")!,
    {
      im_url: "https://www.imdb.com/title/tt0021749/",
      im_rating: "7.0",
    },
    classes
  );
}

main();
