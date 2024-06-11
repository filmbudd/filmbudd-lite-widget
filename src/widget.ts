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

  const { cn_url, cn_rating } = workInfo;
  const ratingCellCN = newRatingCell(
    doc,
    "cn",
    {
      rating: cn_rating!,
      url: cn_url!,
    },
    classes
  );

  const { im_url, im_rating } = workInfo;
  const ratingCellIM = newRatingCell(
    doc,
    "im",
    {
      rating: im_rating!,
      url: im_url!,
    },
    classes
  );

  cn_rating && cn_rating !== "" && widget.appendChild(ratingCellCN);
  im_rating && im_rating !== "" && widget.appendChild(ratingCellIM);

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
