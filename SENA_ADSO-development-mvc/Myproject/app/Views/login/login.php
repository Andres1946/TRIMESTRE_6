<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Login</title>
        <!---Container css-->
        <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
            crossorigin="anonymous">
        <style>
                .input1{
                    
                    background: red;
                    border: white;
                    width: 100%;
                }
                .errorInput{
                    border: solid 1px #ff00003d;
                    box-shadow: 0px 3px 3px #392e2e;
                }
            </style>

    </head>
    <body>
    <p>Nombre: <?php echo $nombre ?></p>
  <p>Edad: <?php echo $edad ?></p>
        <!---Container body-->
        <div class="container-fluid">
            <div class="row">
                <div class="col-6 mx-auto">
                    <form id="form_login" onsubmit="getData(this.id,event)">
                        <div class="mb-3">
                            <label for="user_email" class="form-label">Email
                                address</label>
                            <input type="email" class="form-control"
                                maxlength="20" minlength="10" name="user_email"
                                id="user_email" aria-describedby="emailHelp">

                        </div>
                        <div class="mb-3">
                            <label for="user_password"
                                class="form-label">Password</label>
                            <input type="password" class="form-control"
                                id="user_password" name="user_password"
                                maxlength="20" minlength="10">
                        </div>

                        <button type="submit"
                            class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>

        <!---End Container body-->

        <!---Container javascript-->
        <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
            crossorigin="anonymous"></script>

        <script src="../../../public/assets/js/main.js"></script>

    </body>
</html>