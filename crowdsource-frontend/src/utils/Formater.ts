import { formatDistanceToNow } from "date-fns";



export const formatDateTime = (date: string) => {
   const createdAtDate = new Date(date);
   const formattedDate = formatDistanceToNow(createdAtDate, {
      addSuffix: true,
   });
   return formattedDate
}


export const formatViews = (views: string) => {
   const numberViews = parseInt(views)
   if (numberViews >= 1000) {
      const formattedViews = Math.floor(numberViews / 1000);
      return `${formattedViews}k`;
   } else {
      return `${views} views`;
   }
}

export const getSnippet = (description: string) => {
   const maxLength = 100
   if (!description) {
      return '';
   }


   const truncatedDescription =
      description.length > maxLength
         ? `${description.substring(0, maxLength)}...`
         : description;

   return truncatedDescription;
}