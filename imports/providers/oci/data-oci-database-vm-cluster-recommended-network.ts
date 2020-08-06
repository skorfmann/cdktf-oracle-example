// https://www.terraform.io/docs/providers/oci/r/data_oci_database_vm_cluster_recommended_network.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "compartment_id": {
        "type": "string",
        "required": true
      },
      "defined_tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "display_name": {
        "type": "string",
        "required": true
      },
      "dns": {
        "type": [
          "list",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "exadata_infrastructure_id": {
        "type": "string",
        "required": true
      },
      "freeform_tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "ntp": {
        "type": [
          "list",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "scans": {
        "type": [
          "list",
          [
            "object",
            {
              "hostname": "string",
              "ips": [
                "list",
                "string"
              ],
              "port": "number"
            }
          ]
        ],
        "computed": true
      },
      "vm_networks": {
        "type": [
          "list",
          [
            "object",
            {
              "domain_name": "string",
              "gateway": "string",
              "netmask": "string",
              "network_type": "string",
              "nodes": [
                "list",
                [
                  "object",
                  {
                    "hostname": "string",
                    "ip": "string",
                    "vip": "string",
                    "vip_hostname": "string"
                  }
                ]
              ],
              "vlan_id": "string"
            }
          ]
        ],
        "computed": true
      }
    },
    "block_types": {
      "networks": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "cidr": {
              "type": "string",
              "required": true
            },
            "domain": {
              "type": "string",
              "required": true
            },
            "gateway": {
              "type": "string",
              "required": true
            },
            "netmask": {
              "type": "string",
              "required": true
            },
            "network_type": {
              "type": "string",
              "required": true
            },
            "prefix": {
              "type": "string",
              "required": true
            },
            "vlan_id": {
              "type": "string",
              "required": true
            }
          }
        },
        "min_items": 1
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataOciDatabaseVmClusterRecommendedNetworkConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly definedTags?: { [key: string]: string };
  readonly displayName: string;
  readonly dns?: string[];
  readonly exadataInfrastructureId: string;
  readonly freeformTags?: { [key: string]: string };
  readonly ntp?: string[];
  /** networks block */
  readonly networks: DataOciDatabaseVmClusterRecommendedNetworkNetworks[];
}
export class DataOciDatabaseVmClusterRecommendedNetworkScans extends ComplexComputedList {

  // hostname - computed: true, optional: false, required: true
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // ips - computed: true, optional: false, required: true
  public get ips() {
    return this.getListAttribute('ips');
  }

  // port - computed: true, optional: false, required: true
  public get port() {
    return this.getNumberAttribute('port');
  }
}
export class DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodes extends ComplexComputedList {

  // hostname - computed: true, optional: false, required: true
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // ip - computed: true, optional: false, required: true
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // vip - computed: true, optional: false, required: true
  public get vip() {
    return this.getStringAttribute('vip');
  }

  // vip_hostname - computed: true, optional: false, required: true
  public get vipHostname() {
    return this.getStringAttribute('vip_hostname');
  }
}
export class DataOciDatabaseVmClusterRecommendedNetworkVmNetworks extends ComplexComputedList {

  // domain_name - computed: true, optional: false, required: true
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // gateway - computed: true, optional: false, required: true
  public get gateway() {
    return this.getStringAttribute('gateway');
  }

  // netmask - computed: true, optional: false, required: true
  public get netmask() {
    return this.getStringAttribute('netmask');
  }

  // network_type - computed: true, optional: false, required: true
  public get networkType() {
    return this.getStringAttribute('network_type');
  }

  // nodes - computed: true, optional: false, required: true
  public get nodes() {
    return 'not implemented' as any;
  }

  // vlan_id - computed: true, optional: false, required: true
  public get vlanId() {
    return this.getStringAttribute('vlan_id');
  }
}
export interface DataOciDatabaseVmClusterRecommendedNetworkNetworks {
  readonly cidr: string;
  readonly domain: string;
  readonly gateway: string;
  readonly netmask: string;
  readonly networkType: string;
  readonly prefix: string;
  readonly vlanId: string;
}

// Resource

export class DataOciDatabaseVmClusterRecommendedNetwork extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciDatabaseVmClusterRecommendedNetworkConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_vm_cluster_recommended_network',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._dns = config.dns;
    this._exadataInfrastructureId = config.exadataInfrastructureId;
    this._freeformTags = config.freeformTags;
    this._ntp = config.ntp;
    this._networks = config.networks;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId: string;
  public get compartmentId() {
    return this._compartmentId;
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }
  public get definedTags(): { [key: string]: string } | undefined {
    return this._definedTags; // Getting the computed value is not yet implemented
  }
  public set definedTags(value: { [key: string]: string } | undefined) {
    this._definedTags = value;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName: string;
  public get displayName() {
    return this._displayName;
  }
  public set displayName(value: string) {
    this._displayName = value;
  }

  // dns - computed: true, optional: true, required: false
  private _dns?: string[];
  public get dns() {
    return this._dns ?? this.getListAttribute('dns');
  }
  public set dns(value: string[] | undefined) {
    this._dns = value;
  }

  // exadata_infrastructure_id - computed: false, optional: false, required: true
  private _exadataInfrastructureId: string;
  public get exadataInfrastructureId() {
    return this._exadataInfrastructureId;
  }
  public set exadataInfrastructureId(value: string) {
    this._exadataInfrastructureId = value;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }
  public get freeformTags(): { [key: string]: string } | undefined {
    return this._freeformTags; // Getting the computed value is not yet implemented
  }
  public set freeformTags(value: { [key: string]: string } | undefined) {
    this._freeformTags = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // ntp - computed: true, optional: true, required: false
  private _ntp?: string[];
  public get ntp() {
    return this._ntp ?? this.getListAttribute('ntp');
  }
  public set ntp(value: string[] | undefined) {
    this._ntp = value;
  }

  // scans - computed: true, optional: false, required: true
  public scans(index: string) {
    return new DataOciDatabaseVmClusterRecommendedNetworkScans(this, 'scans', index);
  }

  // vm_networks - computed: true, optional: false, required: true
  public vmNetworks(index: string) {
    return new DataOciDatabaseVmClusterRecommendedNetworkVmNetworks(this, 'vm_networks', index);
  }

  // networks - computed: false, optional: false, required: true
  private _networks: DataOciDatabaseVmClusterRecommendedNetworkNetworks[];
  public get networks() {
    return this._networks;
  }
  public set networks(value: DataOciDatabaseVmClusterRecommendedNetworkNetworks[]) {
    this._networks = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      defined_tags: this._definedTags,
      display_name: this._displayName,
      dns: this._dns,
      exadata_infrastructure_id: this._exadataInfrastructureId,
      freeform_tags: this._freeformTags,
      ntp: this._ntp,
      networks: this._networks,
    };
  }
}
