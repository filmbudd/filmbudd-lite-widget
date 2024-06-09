import "./style.css";

interface Work {
  cnUrl?: string;
  cnRating?: string;
  imUrl?: string;
  imRating?: string;
}

interface DataSourceRating {
  rating: string;
  url: string;
}

const cssNsPrefix = "filmbudd-lite-";

function attachWidget(doc: Document, rootNode: Node, workInfo: Work) {
  const widget = doc.createElement("div");
  widget.id = cssNsPrefix + "widget";

  const { cnUrl: doUrl, cnRating: doRating } = workInfo;
  const ratingCellCN = newRatingCell(doc, "cn", {
    rating: doRating!,
    url: doUrl!,
  });

  const { imUrl, imRating } = workInfo;
  const ratingCellIM = newRatingCell(doc, "im", {
    rating: imRating!,
    url: imUrl!,
  });

  widget.appendChild(ratingCellCN);
  widget.appendChild(ratingCellIM);
  rootNode.appendChild(widget);
}

function newRatingCell(
  doc: Document,
  dataSource: string,
  ratingInfo: DataSourceRating
) {
  const cell = doc.createElement("a");
  cell.href = ratingInfo.url;
  cell.target = "_blank";

  const clsWrapper = ["rating-cell", `rating-cell-${dataSource}`];
  const wrapper = doc.createElement("span");
  wrapper.classList.add(...clsWrapper);

  const clsRating = ["cell-chunk", "rating"];
  const rating = doc.createElement("span");
  rating.classList.add(...clsRating);
  rating.textContent = ratingInfo.rating;

  const clsIcon = ["cell-chunk", "icon"];
  const icon = doc.createElement("span");
  icon.classList.add(...clsIcon);
  icon.textContent = dataSource.toUpperCase();

  wrapper.appendChild(rating);
  wrapper.appendChild(icon);

  cell.appendChild(wrapper);
  return cell;
}

const MidLineEllipsis = "⋯";
const ErrorFace = "x_x*";

function main() {
  const app = document.querySelector<HTMLDivElement>("#app")!;

  attachWidget(document, app, {
    cnUrl: "https://movie.douban.com/subject/1293908/",
    cnRating: "8.1",
    imUrl: "https://www.imdb.com/title/tt0021749/",
    imRating: "7.0",
  });

  attachWidget(document, app, {
    cnUrl: "",
    cnRating: MidLineEllipsis,
    imUrl: "https://www.imdb.com/title/tt0021749/",
    imRating: "7.0",
  });

  attachWidget(document, app, {
    cnUrl: "",
    cnRating: "9.2",
    imUrl: "",
    imRating: MidLineEllipsis,
  });

  attachWidget(document, app, {
    cnUrl: "",
    cnRating: "2.3",
    imUrl: "",
    imRating: ErrorFace,
  });

  attachWidget(document, app, {
    cnUrl: "",
    cnRating: "MISS",
    imUrl: "",
    imRating: "---",
  });

  attachWidget(document, app, {
    cnUrl: "",
    cnRating: "缺",
    imUrl: "",
    imRating: "---",
  });
}

main();
