import { attachWidget, MidLineEllipsis, ErrorFace } from "./widget";

import "./style.css";
import * as classes from "./widget.module.css";

function main() {
  const app = document.querySelector<HTMLDivElement>("#app")!;

  attachWidget(
    document,
    app,
    {
      cnUrl: "https://movie.douban.com/subject/1293908/",
      cnRating: "8.1",
      imUrl: "https://www.imdb.com/title/tt0021749/",
      imRating: "7.0",
    },
    classes
  );

  attachWidget(
    document,
    app,
    {
      imUrl: "https://www.imdb.com/title/tt0021749/",
      imRating: "7.0",
    },
    classes
  );

  attachWidget(
    document,
    app,
    {
      cnUrl: "https://movie.douban.com/subject/1293908/",
      cnRating: "8.1",
    },
    classes
  );

  attachWidget(
    document,
    app,
    {
      cnUrl: "",
      cnRating: MidLineEllipsis,
      imUrl: "https://www.imdb.com/title/tt0021749/",
      imRating: "7.0",
    },
    classes
  );

  attachWidget(
    document,
    app,
    {
      cnUrl: "",
      cnRating: "9.2",
      imUrl: "",
      imRating: MidLineEllipsis,
    },
    classes
  );

  attachWidget(
    document,
    app,
    {
      cnUrl: "",
      cnRating: "2.3",
      imUrl: "",
      imRating: ErrorFace,
    },
    classes
  );

  attachWidget(
    document,
    app,
    {
      cnUrl: "",
      cnRating: "MISS",
      imUrl: "",
      imRating: "---",
    },
    classes
  );

  attachWidget(
    document,
    app,
    {
      cnUrl: "",
      cnRating: "缺",
      imUrl: "",
      imRating: "---",
    },
    classes
  );

  attachWidget(
    document,
    document.querySelector<HTMLTitleElement>("h1")!,
    {
      imUrl: "https://www.imdb.com/title/tt0021749/",
      imRating: "7.0",
    },
    classes
  );
}

main();
