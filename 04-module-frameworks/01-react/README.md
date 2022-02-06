# 02 List

## Resumen

Este ejemplo toma como punto de partida el ejemplo _02-login_.

Vamos a implementar una página de listado y enlazarla con una de detalle.

Es decir mostraremos una lista de miembros que pertenecen a una organización
de Github y cuando pinchemos en el nombre de un usuario navegaremos a la
página de detalle pasando en la URL el id del miembro seleccionado.

En este ejemplo haremos una implementación directa del listado, si
quieres ver una paso a paso puede consultar otro ejemplo previo que tenemos
en el que se muestra como crear una lista de usuarios paso a paso.

## Paso a Paso

- Primero copiamos el ejemplo anterior, y hacemos un _npm install_

```bash
npm install
```

- Si queremos ver que tipo de datos vamos a manejar, podemos abrir el navegador web y ver que devuelve la API Rest de Github.

```bash
https://api.github.com/orgs/lemoncode/members
```

- Vamos a crearnos un interfaz para tener tipada nuestra interfaz,
  y el modificar el componente que mostrará este listado.

_./src/list.tsx_

```diff
import React from "react";
import { Link } from "react-router-dom";

+ interface MemberEntity {
+   id : string;
+   login: string;
+   avatar_url: string;
+ }

export const ListPage: React.FC = () => {
+  const [members, setMembers] = React.useState<MemberEntity[]>([]);

  return (
    <>
      <h2>Hello from List page</h2>
      <Link to="/detail">Navigate to detail page</Link>
    </>
  );
};
```

- Vamos a ahor a hacer la carga de datos:

_./src/list.tsx_

```diff
export const ListPage: React.FC = () => {
  const [members, setMembers] = React.useState<MemberEntity>([]);

+  React.useEffect(() => {
+    fetch(`https://api.github.com/orgs/lemoncode/members`)
+      .then((response) => response.json())
+      .then((json) => setMembers(json));
+  }, []);

  return (
```

- Vamos a comprobar que efectivamente se estan cargando los datos:

_./src/list.tsx_

```diff
  return (
    <>
      <h2>Hello from List page</h2>
+    {members.map((member) =>
+       <span key={member.id}>{member.login}</span>
+    )}
-      <Link to="/detail">Navigate to detail page</Link>
    </>
  );
```

- Y ahora vamos a añadir una tabla:

_./src/list.tsx_

```diff
  return (
    <>
      <h2>Hello from List page</h2>
-      {members.map((member) => (
-        <span key={member.id}>{member.login}</span>
-      ))}
+          <table className="table">
+            <thead>
+                <tr>
+                    <th>
+                        Avatar
+                    </th>
+                    <th>
+                        Id
+                    </th>
+                    <th>
+                        Name
+                    </th>
+                </tr>
+            </thead>
+            <tbody>
+           {members.map((member) => (
+              <tr>
+                <td>
+                  <img src={member.avatar_url} style ={{width: '5rem'}}/>
+                </td>
+                <td>
+                  <span>{member.id}</span>
+                </td>
+                <td>
+                  <span>{member.login}</span>
+                </td>
+              </tr>
+          ))}
+        </tbody>
+      </table>
    </>
  );
```

- Hasta aquí bien, pero yo quiero que cuando el usuario pinche en el nombre de un
  miembro navega a la página de detalle de la aplicación para mostrar la ficha, de
  primeras podríamos pensar en construir algo así como:

```diff
  <td>
-    <span>{member.login}</span>
+    <Link to={`/detail/${member.login}`}>{member.login}</Link>
  </td>
```

- Otra forma de crear la url es usando _generatePath_, pero ojo en la versión 5
esto si hacía el encoding de los parametros, en la 6 no (https://github.com/remix-run/react-router/issues/7428)

_./src/list.tsx_

```diff
import React from "react";
- import { Link } from "react-router-dom";
+ import { Link, generatePath } from "react-router-dom";
```

_./src/list.tsx_
