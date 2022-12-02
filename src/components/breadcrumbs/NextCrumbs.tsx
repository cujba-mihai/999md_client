/* eslint-disable react/jsx-props-no-spreading */
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import style from './BreadCrumbs.module.scss';

const Breadcrumbs = ({ children }: {children: JSX.Element[]}) => (
  <nav className={style.container} aria-label="breadcrumbs">
    <ol className={style.breadcrumb}>
      <li className={style['item-inactive']}>
        {children}
      </li>
    </ol>
  </nav>
)

// Each individual "crumb" in the breadcrumbs list
const Crumb = ({ text, href, last=false }: {text: string; href: string; last: boolean;}) => {
  // The last crumb is rendered as normal text since we are already on the page
  if (last) {
    return <p color="text.primary">{text}</p>
  }

  // All other crumbs will be rendered as links that can be visited 
  return (
    <Link href={href}>
      {text}
    </Link>
  );
}


const NextBreadcrumbs = () => {
    // Gives us ability to load the current route details
    const router = useRouter();
  
    function generateBreadcrumbs() {
      // Remove any query parameters, as those aren't included in breadcrumbs
      const [ asPathWithoutQuery ] = router.asPath.split("?");
  
      // Break down the path between "/"s, removing empty entities
      // Ex:"/my/nested/path" --> ["my", "nested", "path"]
      const asPathNestedRoutes = asPathWithoutQuery?.split("/")
                                                   .filter(v => v.length > 0);
  
      // Iterate over the list of nested route parts and build
      // a "crumb" object for each one.
      const crumblist = asPathNestedRoutes?.map((subpath, idx) => {
        // We can get the partial nested route for the crumb
        // by joining together the path parts up to this point.
        const href = "/" + asPathNestedRoutes.slice(0, idx + 1).join("/");
        // The title will just be the route string for now
        const title = subpath;

        return ({ href, text: title }); 
      })
  
      // Add in a default "Home" crumb for the top-level
      return crumblist ? [{ href: "/", text: "Home" }, ...crumblist] : [{ href: "/", text: "Home" }];
    }
  
    // Call the function to generate the breadcrumbs list
    const breadcrumbs = generateBreadcrumbs();
  
    return (
    <Breadcrumbs  >
      {breadcrumbs.map((crumb, idx) => (
        <Crumb {...crumb} key={idx} last={idx === breadcrumbs.length - 1} />
      ))}
    </Breadcrumbs>
    );
}




export default NextBreadcrumbs;