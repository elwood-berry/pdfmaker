# Client Side


## Getting Started  

```HTML
<!doctype html>
<html lang='en'>
<head>
  <meta charset='utf-8'>
  <title>my first pdfmake example</title>
  <script src='bhttps://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.70/pdfmake.min.js'></script>
  <script src='https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.70/vfs_fonts.js'></script>
</head>
<body>

<script>
    /*
    DEMO: PDFMAKE
    */

   var docDefinition = {
       content:[
           "Hello world"
       ]
   }

   pdfMake.createPdf(docDefinition).download();

</script>
</body>
</html>
```