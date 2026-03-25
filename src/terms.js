export const TERMS = [
  { term: "Port 80", definition: "Default TCP port used for HTTP" },
  { term: "Port 443", definition: "Default TCP port used for HTTPS" },
  { term: "Port 22", definition: "Secure remote CLI access port used by SSH" },
  { term: "Port 53", definition: "DNS port used for name resolution" },
  { term: "Port 161", definition: "SNMP polling port" },
  { term: "OSPF", definition: "Link-state routing protocol using cost as a metric" },
  { term: "STP", definition: "Protocol used to prevent Layer 2 loops" },
  { term: "ACL 101", definition: "A valid number in the extended ACL range" },
  { term: "IEEE 802.1Q", definition: "Standard used for VLAN tagging on trunk links" },
  { term: "LSA", definition: "Element sent between OSPF routers to describe links" },
  { term: "AD 110", definition: "Administrative Distance value for OSPF routes" },
  { term: "IPv6 Prefix FE80::/10", definition: "Link-local IPv6 address range" },
  { term: "DR", definition: "OSPF role that reduces adjacency count on a multiaccess segment" },
  { term: "VLAN", definition: "Logical segmentation of a switched network" },
  { term: "0.0.0.0", definition: "Route used when no specific route exists" },
  { term: "Router ID", definition: "Unique identifier used by an OSPF router" },
  { term: "CDP", definition: "Cisco proprietary Layer-2 protocol used to learn about directly connected Cisco devices" },
  { term: "DNS", definition: "Service that resolves hostnames to IP addresses" },
  { term: "LACP", definition: "Protocol used to negotiate an EtherChannel bundle" },
  { term: "Metric", definition: "Value used by a routing protocol to select the best path" },
  { term: "SNMP", definition: "Protocol used for network monitoring and management data" },
  { term: "ABR", definition: "OSPF router type that connects to Area 0 and one other area" },
  { term: "Priority 32768", definition: "Default spanning-tree bridge priority value" },
  { term: "Port 20", definition: "FTP data transfer port" },
  { term: "Port 21", definition: "FTP control port" },
  { term: "Port 23", definition: "Telnet port used for insecure CLI access" },
  { term: "Port 25", definition: "SMTP port used for sending email" },
  { term: "Port 67", definition: "DHCP server port" },
  { term: "Port 68", definition: "DHCP client port" },
  { term: "Port 69", definition: "TFTP port used for simple file transfers" },
  { term: "Port 110", definition: "POP3 port used for retrieving email" },
  { term: "Port 123", definition: "NTP port used for time synchronization" },
  { term: "Port 143", definition: "IMAP port used for retrieving email" },
  { term: "Port 179", definition: "BGP port used for routing neighbor sessions" },
  { term: "Port 1812", definition: "RADIUS authentication port" },
  { term: "Port 1813", definition: "RADIUS accounting port" },
  { term: "IP Protocol 1", definition: "ICMP protocol number" },
  { term: "IP Protocol 6", definition: "TCP protocol number" },
  { term: "IP Protocol 17", definition: "UDP protocol number" },
  { term: "IP Protocol 47", definition: "GRE protocol number" },
  { term: "IP Protocol 50", definition: "ESP protocol number" },
  { term: "IP Protocol 51", definition: "AH protocol number" },
  { term: "IP Protocol 89", definition: "OSPF protocol number" },
  { term: "ACL 1", definition: "Valid number for a standard ACL" },
  { term: "ACL 10", definition: "Valid number for a standard ACL" },
  { term: "ACL 99", definition: "Highest number in standard ACL range" },
  { term: "ACL 100", definition: "Lowest number in extended ACL range" },
  { term: "ACL 199", definition: "Highest number in extended ACL range" },
  { term: "IEEE 802.1D", definition: "Original Spanning Tree Protocol standard" },
  { term: "IEEE 802.1W", definition: "Rapid Spanning Tree Protocol standard" },
  { term: "IEEE 802.3", definition: "Ethernet standard" },
  { term: "IEEE 802.11", definition: "Wireless LAN standard" },
  { term: "RFC 1918", definition: "Defines private IPv4 address ranges" },
  { term: "IPv4 Prefix 10.0.0.0/8", definition: "Private IPv4 address range" },
  { term: "IPv4 Prefix 172.16.0.0/12", definition: "Private IPv4 address range" },
  { term: "IPv4 Prefix 192.168.0.0/16", definition: "Private IPv4 address range" },
  { term: "IPv4 Prefix 127.0.0.0/8", definition: "Loopback IPv4 range" },
  { term: "IPv4 Prefix 169.254.0.0/16", definition: "Link-local IPv4 range" },
  { term: "IPv6 Prefix ::1/128", definition: "Loopback IPv6 address" },
  { term: "IPv6 Prefix 2000::/3", definition: "Global unicast IPv6 range" },
  { term: "IPv6 Prefix FC00::/7", definition: "Unique local IPv6 range" },
  { term: "IPv6 Prefix FD00::/8", definition: "Common unique local IPv6 range" },
  { term: "IPv6 Prefix FF00::/8", definition: "Multicast IPv6 range" },
  { term: "AD 0", definition: "Administrative Distance for directly connected routes" },
  { term: "AD 1", definition: "Administrative Distance for static routes" },
  { term: "AD 90", definition: "Administrative Distance for EIGRP routes" },
  { term: "AD 120", definition: "Administrative Distance for RIP routes" },
  { term: "TCP", definition: "Connection-oriented transport protocol" },
  { term: "UDP", definition: "Connectionless transport protocol" },
  { term: "IPv4", definition: "32-bit IP addressing protocol" },
  { term: "IPv6", definition: "128-bit IP addressing protocol" },
  { term: "Unicast", definition: "One-to-one communication method" },
  { term: "Multicast", definition: "One-to-many communication method" },
  { term: "Anycast", definition: "One-to-nearest communication method" },
  { term: "SSID", definition: "Name of a wireless network" },
  { term: "RF", definition: "Radio frequency used in wireless communication" },
  { term: "MAC Learning", definition: "Switch process of learning source MAC addresses" },
  { term: "Frame Flooding", definition: "Sending frames out all ports except the source port" },
  { term: "Access Port", definition: "Switch port assigned to a single VLAN" },
  { term: "Trunk Port", definition: "Port that carries multiple VLANs" },
  { term: "Native VLAN", definition: "Untagged VLAN on a trunk link" },
  { term: "LLDP", definition: "Vendor-neutral neighbor discovery protocol" },
  { term: "EtherChannel", definition: "Bundle of multiple physical links into one logical link" },
  { term: "Root Bridge", definition: "Central reference switch in spanning-tree" },
  { term: "Root Port", definition: "Port on the local switch that identifies that best path port toward the root bridge" },
  { term: "Designated Port", definition: "Spanning-Tree Port forwarding traffic toward a segment" },
  { term: "HSRP", definition: "Cisco FHRP protocol for gateway redundancy which allows for only a single Active router" },
  { term: "VRRP", definition: "Standards-based FHRP protocol" },
  { term: "GLBP", definition: "Cisco FHRP providing load balancing which allows for multiple active routers." },
  { term: "Static NAT", definition: "One-to-one address translation" },
  { term: "DHCP", definition: "Automatically assigns IP addresses" },
  { term: "DHCP Relay", definition: "Forwards DHCP requests across networks" },
  { term: "Syslog", definition: "Logging protocol for network devices" },
  { term: "SNMP Trap", definition: "Unsolicited SNMP message from agent to manager" },
  { term: "WPA2", definition: "Wi-Fi security standard using AES encryption" },
  { term: "Port 162", definition: "SNMP trap destination port" },
  { term: "Port 443", definition: "Secure web traffic port using HTTPS" },
  { term: "Port 80", definition: "Unencrypted web traffic port using HTTP" },

  { term: "IP Protocol 6", definition: "Protocol number used by TCP" },
  { term: "IP Protocol 17", definition: "Protocol number used by UDP" },
  { term: "IP Protocol 89", definition: "Protocol number used by OSPF" },

  { term: "ACL Range 1-99", definition: "Number range used for standard IPv4 ACLs" },
  { term: "ACL Range 100-199", definition: "Number range used for extended IPv4 ACLs" },

  { term: "IEEE 802.1Q", definition: "Standard that defines VLAN tagging on trunk links" },
  { term: "IEEE 802.1D", definition: "Standard that defines classic spanning tree behavior" },
  { term: "IEEE 802.1W", definition: "Standard that defines rapid spanning tree behavior" },

  { term: "IPv4 Prefix 224.0.0.0/4", definition: "IPv4 multicast address range" },
  { term: "IPv6 Prefix FE80::/10", definition: "IPv6 link-local address range" },

  { term: "AD 110", definition: "Administrative Distance used by OSPF routes" },
  { term: "AD 120", definition: "Administrative Distance used by RIP routes" },

  { term: "Cost", definition: "Metric used by OSPF to determine best path" },
  { term: "Administrative Distance", definition: "Value used to choose between different routing sources" },
  { term: "Longest Prefix Match", definition: "Routing decision rule selecting the most specific route" },

  { term: "Layer 2 Switch", definition: "Device that forwards frames using MAC addresses" },
  { term: "Layer 3 Switch", definition: "Device capable of performing routing functions" },
  { term: "Firewall", definition: "Device that filters traffic based on security rules" },

  { term: "Spine-Leaf", definition: "Data center topology where every leaf connects to every spine" },
  { term: "WAN", definition: "Network connecting devices across large geographic distances" },

  { term: "Full Duplex", definition: "Communication mode allowing simultaneous send and receive" },
  { term: "Half Duplex", definition: "Communication mode allowing only one direction at a time" },

  { term: "EUI-64", definition: "Method for generating an IPv6 interface ID from a MAC address" },

  { term: "Encryption", definition: "Process of protecting data by converting it into unreadable form" },

  { term: "VRF", definition: "Technology that allows multiple routing tables on one device" },

  { term: "MAC Address Table", definition: "Table used by switches to map MAC addresses to interfaces" },

  { term: "Voice VLAN", definition: "VLAN specifically used for IP phone traffic" },

  { term: "CDP", definition: "Cisco protocol used to discover directly connected Cisco devices" },

  { term: "Rapid PVST+", definition: "Cisco spanning tree mode with fast convergence per VLAN" },

  { term: "BPDU", definition: "Frame used by spanning tree to exchange topology information" },
  { term: "PortFast", definition: "Feature that allows a port to skip listening and learning states" },

  { term: "SSH", definition: "Secure protocol used for remote device management" },
  { term: "HTTPS", definition: "Secure protocol used for web-based management access" },

  { term: "RADIUS", definition: "AAA protocol commonly used for network access authentication" },
  { term: "TACACS+", definition: "AAA protocol commonly used for device administration" },

  { term: "OSPFv2", definition: "Version of OSPF used for IPv4 routing" },
  { term: "Router ID", definition: "Unique identifier assigned to an OSPF router" },

  { term: "Area 0", definition: "Backbone area required in OSPF networks" },

  { term: "Hello", definition: "OSPF packet used to discover and maintain neighbors" },

  { term: "HSRP", definition: "Cisco protocol providing gateway redundancy with active/standby roles" },
  { term: "VRRP", definition: "Standards-based protocol for default gateway redundancy" },

  { term: "NAT", definition: "Process of translating one IP address into another" },
  { term: "Static NAT", definition: "Fixed one-to-one address translation mapping" },

  { term: "DHCP Client", definition: "Device that requests IP configuration from a DHCP server" },

  { term: "Syslog", definition: "Protocol used to send log messages to a central server" },

  { term: "Policing", definition: "QoS mechanism that drops traffic exceeding a defined rate" },
  { term: "Shaping", definition: "QoS mechanism that buffers traffic to smooth transmission rate" },

  { term: "Threat", definition: "Potential source of harm to a system or network" },
  { term: "Vulnerability", definition: "Weakness that could be exploited by an attacker" },

  { term: "Multifactor Authentication", definition: "Security method requiring more than one verification factor" },

  { term: "IPsec", definition: "Suite of protocols used to secure IP communications" },

  { term: "Port Security", definition: "Feature that limits the number of MAC addresses on a switch port" },

  { term: "WPA2", definition: "Wireless security standard using AES encryption" },
  { term: "WPA3", definition: "Newer wireless security standard with stronger protections" },

  { term: "Overlay", definition: "Logical network built on top of another network" },
  { term: "Underlay", definition: "Physical network used to carry overlay traffic" },

  { term: "REST API", definition: "Interface that uses HTTP methods to interact with systems" },

  { term: "JSON", definition: "Lightweight data format used in APIs" }
];