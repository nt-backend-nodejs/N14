SELECT 
page, count(*) as page_count ,
FROM kitoblar 
group by page
HAVING COUNT(*) > 1;