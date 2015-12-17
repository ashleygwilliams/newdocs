<!--
order: 20
title: Customizing server configuration
-->

# Customizing server configuration

You can customize the server's configuration by visiting npm
On-Site's admin console (_http://myreg.mycompany.com:8800_).

## Authentication

Authentication method.

Possible values: [`"GitHub"`](/enterprise/github), [`"Open"`](/enterprise/no-authentication), "LDAP"

## Upstream registry

Configure npm On-Site to replicate from an upstream registry.
This can be useful for creating backups.

## Storage

Configure where npm On-Sites persistent data is stored. You may, for instance, want to store to an NFS drive that you regularly back up.

## Proxy URL

Allows npm On-Site to be configured with a corporate proxy.

## npm On-Site registry URL

Specify an alternative package URL to store in the database, rather than
the IP that npm On-Site auto-detects. This is useful if you wish
to place an HTTPs load-balancer in front of npm On-Site, for example:

[using nginx for SSL termination](https://gist.github.com/bcoe/c073859d060b802b15aa)
