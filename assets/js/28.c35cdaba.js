(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{415:function(e,t,s){"use strict";s.r(t);var a=s(44),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"permission-desc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#permission-desc"}},[e._v("#")]),e._v(" Permission Desc")]),e._v(" "),s("p",[e._v("Different functions and stages require different permissions. The permission requirements that may be involved in each function are listed below. If there are any omissions, please suggest and add.")]),e._v(" "),s("p",[e._v("The suggested permissions are:")]),e._v(" "),s("p",[s("code",[e._v("GRANT ALL PRIVILEGES ON *.* TO ...")])]),e._v(" "),s("p",[e._v("or")]),e._v(" "),s("p",[s("code",[e._v("GRANT SELECT, INSERT, UPDATE, DELETE, CREATE, DROP, PROCESS, REFERENCES, INDEX, ALTER, SUPER, REPLICATION SLAVE, REPLICATION CLIENT, TRIGGER ON *.* TO ...")])]),e._v(" "),s("h2",{attrs:{id:"audit-function"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#audit-function"}},[e._v("#")]),e._v(" Audit function")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("information_schema db")]),e._v(" Metadata query permissions, table structure, index information, constraints, etc.")]),e._v(" "),s("li",[s("code",[e._v("mysql db")]),e._v(" use permission, no query, the library is connected by default, and it can be modified by calling the option "),s("code",[e._v("--db")]),e._v(" parameter")]),e._v(" "),s("li",[s("code",[e._v("DML")]),e._v(" During the audit, the explain operation will be performed on the DML statement, and this operation requires the actual corresponding DML authority.")]),e._v(" "),s("li",[s("code",[e._v("REFERENCES")]),e._v(" Only required for foreign keys")])]),e._v(" "),s("h2",{attrs:{id:"execute"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#execute"}},[e._v("#")]),e._v(" Execute")]),e._v(" "),s("ul",[s("li",[e._v("Actual SQL execution permissions")])]),e._v(" "),s("h3",{attrs:{id:"use-pt-osc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#use-pt-osc"}},[e._v("#")]),e._v(" Use pt-osc")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("PROCESS")]),e._v(" permission, view processlist information")]),e._v(" "),s("li",[s("code",[e._v("TRIGGER")]),e._v(" create and delete triggers")]),e._v(" "),s("li",[s("code",[e._v("SUPER")]),e._v(" or "),s("code",[e._v("REPLICATION CLIENT")]),e._v(" When there is a master-slave, check the master-slave delay")])]),e._v(" "),s("h3",{attrs:{id:"use-gh-ost"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#use-gh-ost"}},[e._v("#")]),e._v(" Use gh-ost")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("SUPER|REPLICATION CLIENT, REPLICATION SLAVE")]),e._v(" Simulate slave pull binlog events")]),e._v(" "),s("li",[s("code",[e._v("ALTER")]),e._v(", "),s("code",[e._v("CREATE")]),e._v(", "),s("code",[e._v("DELETE")]),e._v(", "),s("code",[e._v("DROP")]),e._v(", "),s("code",[e._v("INDEX")]),e._v(", "),s("code",[e._v("INSERT")]),e._v(", "),s("code",[e._v("LOCK TABLES")]),e._v(", "),s("code",[e._v("SELECT")]),e._v(", "),s("code",[e._v("TRIGGER")]),e._v(", "),s("code",[e._v("UPDATE")])])]),e._v(" "),s("h2",{attrs:{id:"backup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#backup"}},[e._v("#")]),e._v(" Backup")]),e._v(" "),s("h3",{attrs:{id:"remote-database"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#remote-database"}},[e._v("#")]),e._v(" Remote database")]),e._v(" "),s("ul",[s("li",[s("p",[s("code",[e._v("SUPER")]),e._v(" When the binlog format is not row, execute "),s("code",[e._v("set session binlog_format='row'")])])]),e._v(" "),s("li",[s("p",[s("code",[e._v("SUPER|REPLICATION CLIENT, REPLICATION SLAVE")]),e._v(" binlog解析")])])]),e._v(" "),s("h3",{attrs:{id:"database-used-for-backup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#database-used-for-backup"}},[e._v("#")]),e._v(" Database used for backup")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("It is recommended to grant all permissions to the backup library instance")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);