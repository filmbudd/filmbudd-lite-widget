export interface Work {
  cnUrl?: string;
  cnRating?: string;
  imUrl?: string;
  imRating?: string;
}

export interface DataSourceRating {
  rating: string;
  url: string;
}

export const cssNsPrefix = "filmbuddLite";

type FuncAttach = (doc: Document, root: Node, node: Node) => void;

export function attachWidget(
  doc: Document,
  rootNode: Node,
  workInfo: Work,
  classes: CSSModule,
  funcAttach?: FuncAttach
) {
  const defaultClassName = cssNsPrefix + "Widget";
  const clsWidget = [defaultClassName, classes[cssNsPrefix + "Widget"]!];
  const widget = doc.createElement("div");
  widget.classList.add(...clsWidget);

  const { cnUrl: doUrl, cnRating: doRating } = workInfo;
  const ratingCellCN = newRatingCell(
    doc,
    "cn",
    {
      rating: doRating!,
      url: doUrl!,
    },
    classes
  );

  const { imUrl, imRating } = workInfo;
  const ratingCellIM = newRatingCell(
    doc,
    "im",
    {
      rating: imRating!,
      url: imUrl!,
    },
    classes
  );

  doRating && doRating !== "" && widget.appendChild(ratingCellCN);
  imRating && imRating !== "" && widget.appendChild(ratingCellIM);

  funcAttach ? funcAttach(doc, rootNode, widget) : rootNode.appendChild(widget);
}

function newRatingCell(
  doc: Document,
  dataSource: string,
  ratingInfo: DataSourceRating,
  classes: any
) {
  const cell = doc.createElement("a");
  cell.href = ratingInfo.url;
  cell.target = "_blank";
  const clsCell = [classes["wrapper"]];
  cell.classList.add(...clsCell);

  const clsWrapper = [classes["ratingCell"], classes[`${dataSource}`]];
  const wrapper = doc.createElement("span");
  wrapper.classList.add(...clsWrapper);

  const clsRating = [classes["cellChunk"], classes["rating"]];
  const rating = doc.createElement("span");
  rating.classList.add(...clsRating);
  rating.textContent = ratingInfo.rating;

  const clsIcon = [classes["cellChunk"], classes["icon"]];
  const icon = doc.createElement("span");
  icon.classList.add(...clsIcon);
  icon.textContent = dataSource.toUpperCase();

  wrapper.appendChild(rating);
  wrapper.appendChild(icon);

  cell.appendChild(wrapper);
  return cell;
}

export const MidLineEllipsis = "⋯";
export const ErrorFace = "x_x*";
