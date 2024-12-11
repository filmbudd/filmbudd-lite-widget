import styles from "./widget.module.css";

export interface Work {
  cn_url?: string;
  cn_rating?: string;
  im_url?: string;
  im_rating?: string;
}

export interface DataSourceRating {
  rating: string;
  url: string;
}

type FuncAttach = (doc: Document, root: Node, node: Node) => void;

export function attachWidget(doc: Document, rootNode: Node, workInfo: Work, _classes: typeof styles, funcAttach?: FuncAttach) {
  const widget = newWidget(doc, workInfo, _classes);
  funcAttach ? funcAttach(doc, rootNode, widget) : rootNode.appendChild(widget);
}

export function newRatingCell(doc: Document, dataSource: string, ratingInfo: DataSourceRating, _classes: typeof styles) {
  const cell = doc.createElement("a");
  cell.href = ratingInfo.url;
  cell.target = "_blank";
  cell.classList.add(_classes.wrapper);

  const wrapper = doc.createElement("span");

  const _m = _classes as { [key: string]: string };
  const classDateSource = _m[`${dataSource}`] as string;

  const classesWrapper = [_classes.ratingCell, classDateSource];
  wrapper.classList.add(...classesWrapper);

  const rating = doc.createElement("span");
  const classesRating = [_classes.cellChunk, _classes.rating];
  rating.classList.add(...classesRating);
  rating.textContent = ratingInfo.rating;

  const icon = doc.createElement("span");
  const classesIcon = [_classes.cellChunk, _classes.icon];
  icon.classList.add(...classesIcon);
  icon.textContent = dataSource.toUpperCase();

  wrapper.appendChild(rating);
  wrapper.appendChild(icon);

  cell.appendChild(wrapper);
  return cell;
}

export const MidLineEllipsis = "⋯";
export const ErrorFace = "x_x*";

export function newWidget(doc: Document, workInfo: Work, _classes: typeof styles) {
  const widget = doc.createElement("div");
  widget.classList.add(_classes.filmbuddLiteWidget);

  const { cn_url, cn_rating } = workInfo;
  const ratingCellCN = newRatingCell(
    doc,
    "cn",
    {
      rating: cn_rating!,
      url: cn_url!,
    },
    _classes
  );

  const { im_url, im_rating } = workInfo;
  const ratingCellIM = newRatingCell(
    doc,
    "im",
    {
      rating: im_rating!,
      url: im_url!,
    },
    _classes
  );

  cn_rating && cn_rating !== "" && widget.appendChild(ratingCellCN);
  im_rating && im_rating !== "" && widget.appendChild(ratingCellIM);

  return widget;
}
