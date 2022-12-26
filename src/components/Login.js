import React from "react";
import { TextInput, Button, Grid, Image } from "@mantine/core";
import { IconUser, IconLock } from "@tabler/icons";
import "../styles/Login.css";

function Login() {
  return (
    <div class="loginform">
      <Grid class="logindesc">
        <Grid.Col md={12} lg={12} span={12}>
          <h1>Online İşlem Merkezi</h1>
        </Grid.Col>
      </Grid>
      <div class="userinfo">
        <Grid class="logininput">
          <Grid.Col md={6} lg={12} span={12}>
            <TextInput
              placeholder="Kullanıcı Adı"
              label="Kullanıcı Adı"
              icon={<IconUser size={14} />}
            />
          </Grid.Col>
        </Grid>
        <Grid class="passinput">
          <Grid.Col md={6} lg={12} span={12}>
            <TextInput
              placeholder="Şifre"
              label="Şifre"
              icon={<IconLock size={14} />}
            />
          </Grid.Col>
        </Grid>
        <Grid class="forgotpsw">
          <Grid.Col md={6} lg={12} span={12}>
            <a href="/">Şifremi unuttum</a>
          </Grid.Col>
        </Grid>
        <Grid class="kaydetbutonu">
          <Grid.Col offset={7} md={6} lg={12} span={12}>
            <Button color="dark" radius="xs" uppercase>
              GİRİŞ
            </Button>
          </Grid.Col>
        </Grid>
      </div>
      <div style={{ marginTop: "100px", marginLeft: "-30px" }}>
        <Image
          width={400}
          height={100}
          src="https://www.linkpicture.com/q/wiradius.png"
        />
      </div>
    </div>
  );
}

export default Login;
