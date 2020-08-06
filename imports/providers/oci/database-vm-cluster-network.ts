// https://www.terraform.io/docs/providers/oci/r/database_vm_cluster_network.html
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
      "lifecycle_details": {
        "type": "string",
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
      "state": {
        "type": "string",
        "computed": true
      },
      "time_created": {
        "type": "string",
        "computed": true
      },
      "validate_vm_cluster_network": {
        "type": "bool",
        "optional": true
      },
      "vm_cluster_id": {
        "type": "string",
        "computed": true
      }
    },
    "block_types": {
      "scans": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "hostname": {
              "type": "string",
              "required": true
            },
            "ips": {
              "type": [
                "list",
                "string"
              ],
              "required": true
            },
            "port": {
              "type": "number",
              "required": true
            }
          }
        },
        "min_items": 1
      },
      "timeouts": {
        "nesting_mode": "single",
        "block": {
          "attributes": {
            "create": {
              "type": "string",
              "optional": true
            },
            "delete": {
              "type": "string",
              "optional": true
            },
            "update": {
              "type": "string",
              "optional": true
            }
          }
        }
      },
      "vm_networks": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "domain_name": {
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
            "vlan_id": {
              "type": "string",
              "required": true
            }
          },
          "block_types": {
            "nodes": {
              "nesting_mode": "set",
              "block": {
                "attributes": {
                  "hostname": {
                    "type": "string",
                    "required": true
                  },
                  "ip": {
                    "type": "string",
                    "required": true
                  },
                  "vip": {
                    "type": "string",
                    "optional": true,
                    "computed": true
                  },
                  "vip_hostname": {
                    "type": "string",
                    "optional": true,
                    "computed": true
                  }
                }
              },
              "min_items": 1
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
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DatabaseVmClusterNetworkConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly definedTags?: { [key: string]: string };
  readonly displayName: string;
  readonly dns?: string[];
  readonly exadataInfrastructureId: string;
  readonly freeformTags?: { [key: string]: string };
  readonly ntp?: string[];
  readonly validateVmClusterNetwork?: boolean;
  /** scans block */
  readonly scans: DatabaseVmClusterNetworkScans[];
  /** timeouts block */
  readonly timeouts?: DatabaseVmClusterNetworkTimeouts;
  /** vm_networks block */
  readonly vmNetworks: DatabaseVmClusterNetworkVmNetworks[];
}
export interface DatabaseVmClusterNetworkScans {
  readonly hostname: string;
  readonly ips: string[];
  readonly port: number;
}
export interface DatabaseVmClusterNetworkTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}
export interface DatabaseVmClusterNetworkVmNetworksNodes {
  readonly hostname: string;
  readonly ip: string;
  readonly vip?: string;
  readonly vipHostname?: string;
}
export interface DatabaseVmClusterNetworkVmNetworks {
  readonly domainName: string;
  readonly gateway: string;
  readonly netmask: string;
  readonly networkType: string;
  readonly vlanId: string;
  /** nodes block */
  readonly nodes: DatabaseVmClusterNetworkVmNetworksNodes[];
}

// Resource

export class DatabaseVmClusterNetwork extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DatabaseVmClusterNetworkConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_vm_cluster_network',
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
    this._validateVmClusterNetwork = config.validateVmClusterNetwork;
    this._scans = config.scans;
    this._timeouts = config.timeouts;
    this._vmNetworks = config.vmNetworks;
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

  // lifecycle_details - computed: true, optional: false, required: true
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // ntp - computed: true, optional: true, required: false
  private _ntp?: string[];
  public get ntp() {
    return this._ntp ?? this.getListAttribute('ntp');
  }
  public set ntp(value: string[] | undefined) {
    this._ntp = value;
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // validate_vm_cluster_network - computed: false, optional: true, required: false
  private _validateVmClusterNetwork?: boolean;
  public get validateVmClusterNetwork() {
    return this._validateVmClusterNetwork;
  }
  public set validateVmClusterNetwork(value: boolean | undefined) {
    this._validateVmClusterNetwork = value;
  }

  // vm_cluster_id - computed: true, optional: false, required: true
  public get vmClusterId() {
    return this.getStringAttribute('vm_cluster_id');
  }

  // scans - computed: false, optional: false, required: true
  private _scans: DatabaseVmClusterNetworkScans[];
  public get scans() {
    return this._scans;
  }
  public set scans(value: DatabaseVmClusterNetworkScans[]) {
    this._scans = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DatabaseVmClusterNetworkTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DatabaseVmClusterNetworkTimeouts | undefined) {
    this._timeouts = value;
  }

  // vm_networks - computed: false, optional: false, required: true
  private _vmNetworks: DatabaseVmClusterNetworkVmNetworks[];
  public get vmNetworks() {
    return this._vmNetworks;
  }
  public set vmNetworks(value: DatabaseVmClusterNetworkVmNetworks[]) {
    this._vmNetworks = value;
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
      validate_vm_cluster_network: this._validateVmClusterNetwork,
      scans: this._scans,
      timeouts: this._timeouts,
      vm_networks: this._vmNetworks,
    };
  }
}
