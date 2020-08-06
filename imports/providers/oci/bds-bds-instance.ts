// https://www.terraform.io/docs/providers/oci/r/bds_bds_instance.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "cluster_admin_password": {
        "type": "string",
        "required": true,
        "sensitive": true
      },
      "cluster_details": {
        "type": [
          "list",
          [
            "object",
            {
              "bd_cell_version": "string",
              "bda_version": "string",
              "bdm_version": "string",
              "bds_version": "string",
              "big_data_manager_url": "string",
              "cloudera_manager_url": "string",
              "csql_cell_version": "string",
              "db_version": "string",
              "hue_server_url": "string",
              "os_version": "string",
              "time_created": "string",
              "time_refreshed": "string"
            }
          ]
        ],
        "computed": true
      },
      "cluster_public_key": {
        "type": "string",
        "required": true
      },
      "cluster_version": {
        "type": "string",
        "required": true
      },
      "compartment_id": {
        "type": "string",
        "required": true
      },
      "created_by": {
        "type": "string",
        "computed": true
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
      "is_cloud_sql_configured": {
        "type": "bool",
        "optional": true,
        "computed": true
      },
      "is_high_availability": {
        "type": "bool",
        "required": true
      },
      "is_secure": {
        "type": "bool",
        "required": true
      },
      "nodes": {
        "type": [
          "list",
          [
            "object",
            {
              "attached_block_volumes": [
                "list",
                [
                  "object",
                  {
                    "volume_attachment_id": "string",
                    "volume_size_in_gbs": "string"
                  }
                ]
              ],
              "availability_domain": "string",
              "display_name": "string",
              "fault_domain": "string",
              "image_id": "string",
              "instance_id": "string",
              "ip_address": "string",
              "node_type": "string",
              "shape": "string",
              "ssh_fingerprint": "string",
              "state": "string",
              "subnet_id": "string",
              "time_created": "string"
            }
          ]
        ],
        "computed": true
      },
      "number_of_nodes": {
        "type": "number",
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
      "time_updated": {
        "type": "string",
        "computed": true
      }
    },
    "block_types": {
      "cloud_sql_details": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "block_volume_size_in_gbs": {
              "type": "string",
              "required": true
            },
            "ip_address": {
              "type": "string",
              "computed": true
            },
            "is_kerberos_mapped_to_database_users": {
              "type": "bool",
              "computed": true
            },
            "kerberos_details": {
              "type": [
                "list",
                [
                  "object",
                  {
                    "keytab_file": "string",
                    "principal_name": "string"
                  }
                ]
              ],
              "computed": true
            },
            "shape": {
              "type": "string",
              "required": true
            }
          }
        },
        "max_items": 1
      },
      "master_node": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "block_volume_size_in_gbs": {
              "type": "string",
              "required": true
            },
            "number_of_nodes": {
              "type": "number",
              "required": true
            },
            "shape": {
              "type": "string",
              "required": true
            },
            "subnet_id": {
              "type": "string",
              "required": true
            }
          }
        },
        "min_items": 1,
        "max_items": 1
      },
      "network_config": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "cidr_block": {
              "type": "string",
              "optional": true,
              "computed": true
            },
            "is_nat_gateway_required": {
              "type": "bool",
              "optional": true,
              "computed": true
            }
          }
        },
        "max_items": 1
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
      "util_node": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "block_volume_size_in_gbs": {
              "type": "string",
              "required": true
            },
            "number_of_nodes": {
              "type": "number",
              "required": true
            },
            "shape": {
              "type": "string",
              "required": true
            },
            "subnet_id": {
              "type": "string",
              "required": true
            }
          }
        },
        "min_items": 1,
        "max_items": 1
      },
      "worker_node": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "block_volume_size_in_gbs": {
              "type": "string",
              "required": true
            },
            "number_of_nodes": {
              "type": "number",
              "required": true
            },
            "shape": {
              "type": "string",
              "required": true
            },
            "subnet_id": {
              "type": "string",
              "required": true
            }
          }
        },
        "min_items": 1,
        "max_items": 1
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface BdsBdsInstanceConfig extends TerraformMetaArguments {
  readonly clusterAdminPassword: string;
  readonly clusterPublicKey: string;
  readonly clusterVersion: string;
  readonly compartmentId: string;
  readonly definedTags?: { [key: string]: string };
  readonly displayName: string;
  readonly freeformTags?: { [key: string]: string };
  readonly isCloudSqlConfigured?: boolean;
  readonly isHighAvailability: boolean;
  readonly isSecure: boolean;
  /** cloud_sql_details block */
  readonly cloudSqlDetails?: BdsBdsInstanceCloudSqlDetails[];
  /** master_node block */
  readonly masterNode: BdsBdsInstanceMasterNode[];
  /** network_config block */
  readonly networkConfig?: BdsBdsInstanceNetworkConfig[];
  /** timeouts block */
  readonly timeouts?: BdsBdsInstanceTimeouts;
  /** util_node block */
  readonly utilNode: BdsBdsInstanceUtilNode[];
  /** worker_node block */
  readonly workerNode: BdsBdsInstanceWorkerNode[];
}
export class BdsBdsInstanceClusterDetails extends ComplexComputedList {

  // bd_cell_version - computed: true, optional: false, required: true
  public get bdCellVersion() {
    return this.getStringAttribute('bd_cell_version');
  }

  // bda_version - computed: true, optional: false, required: true
  public get bdaVersion() {
    return this.getStringAttribute('bda_version');
  }

  // bdm_version - computed: true, optional: false, required: true
  public get bdmVersion() {
    return this.getStringAttribute('bdm_version');
  }

  // bds_version - computed: true, optional: false, required: true
  public get bdsVersion() {
    return this.getStringAttribute('bds_version');
  }

  // big_data_manager_url - computed: true, optional: false, required: true
  public get bigDataManagerUrl() {
    return this.getStringAttribute('big_data_manager_url');
  }

  // cloudera_manager_url - computed: true, optional: false, required: true
  public get clouderaManagerUrl() {
    return this.getStringAttribute('cloudera_manager_url');
  }

  // csql_cell_version - computed: true, optional: false, required: true
  public get csqlCellVersion() {
    return this.getStringAttribute('csql_cell_version');
  }

  // db_version - computed: true, optional: false, required: true
  public get dbVersion() {
    return this.getStringAttribute('db_version');
  }

  // hue_server_url - computed: true, optional: false, required: true
  public get hueServerUrl() {
    return this.getStringAttribute('hue_server_url');
  }

  // os_version - computed: true, optional: false, required: true
  public get osVersion() {
    return this.getStringAttribute('os_version');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_refreshed - computed: true, optional: false, required: true
  public get timeRefreshed() {
    return this.getStringAttribute('time_refreshed');
  }
}
export class BdsBdsInstanceNodesAttachedBlockVolumes extends ComplexComputedList {

  // volume_attachment_id - computed: true, optional: false, required: true
  public get volumeAttachmentId() {
    return this.getStringAttribute('volume_attachment_id');
  }

  // volume_size_in_gbs - computed: true, optional: false, required: true
  public get volumeSizeInGbs() {
    return this.getStringAttribute('volume_size_in_gbs');
  }
}
export class BdsBdsInstanceNodes extends ComplexComputedList {

  // attached_block_volumes - computed: true, optional: false, required: true
  public get attachedBlockVolumes() {
    return 'not implemented' as any;
  }

  // availability_domain - computed: true, optional: false, required: true
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // fault_domain - computed: true, optional: false, required: true
  public get faultDomain() {
    return this.getStringAttribute('fault_domain');
  }

  // image_id - computed: true, optional: false, required: true
  public get imageId() {
    return this.getStringAttribute('image_id');
  }

  // instance_id - computed: true, optional: false, required: true
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // ip_address - computed: true, optional: false, required: true
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // node_type - computed: true, optional: false, required: true
  public get nodeType() {
    return this.getStringAttribute('node_type');
  }

  // shape - computed: true, optional: false, required: true
  public get shape() {
    return this.getStringAttribute('shape');
  }

  // ssh_fingerprint - computed: true, optional: false, required: true
  public get sshFingerprint() {
    return this.getStringAttribute('ssh_fingerprint');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // subnet_id - computed: true, optional: false, required: true
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }
}
export interface BdsBdsInstanceCloudSqlDetails {
  readonly blockVolumeSizeInGbs: string;
  readonly shape: string;
}
export interface BdsBdsInstanceMasterNode {
  readonly blockVolumeSizeInGbs: string;
  readonly numberOfNodes: number;
  readonly shape: string;
  readonly subnetId: string;
}
export interface BdsBdsInstanceNetworkConfig {
  readonly cidrBlock?: string;
  readonly isNatGatewayRequired?: boolean;
}
export interface BdsBdsInstanceTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}
export interface BdsBdsInstanceUtilNode {
  readonly blockVolumeSizeInGbs: string;
  readonly numberOfNodes: number;
  readonly shape: string;
  readonly subnetId: string;
}
export interface BdsBdsInstanceWorkerNode {
  readonly blockVolumeSizeInGbs: string;
  readonly numberOfNodes: number;
  readonly shape: string;
  readonly subnetId: string;
}

// Resource

export class BdsBdsInstance extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: BdsBdsInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_bds_bds_instance',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._clusterAdminPassword = config.clusterAdminPassword;
    this._clusterPublicKey = config.clusterPublicKey;
    this._clusterVersion = config.clusterVersion;
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._isCloudSqlConfigured = config.isCloudSqlConfigured;
    this._isHighAvailability = config.isHighAvailability;
    this._isSecure = config.isSecure;
    this._cloudSqlDetails = config.cloudSqlDetails;
    this._masterNode = config.masterNode;
    this._networkConfig = config.networkConfig;
    this._timeouts = config.timeouts;
    this._utilNode = config.utilNode;
    this._workerNode = config.workerNode;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_admin_password - computed: false, optional: false, required: true
  private _clusterAdminPassword: string;
  public get clusterAdminPassword() {
    return this._clusterAdminPassword;
  }
  public set clusterAdminPassword(value: string) {
    this._clusterAdminPassword = value;
  }

  // cluster_details - computed: true, optional: false, required: true
  public clusterDetails(index: string) {
    return new BdsBdsInstanceClusterDetails(this, 'cluster_details', index);
  }

  // cluster_public_key - computed: false, optional: false, required: true
  private _clusterPublicKey: string;
  public get clusterPublicKey() {
    return this._clusterPublicKey;
  }
  public set clusterPublicKey(value: string) {
    this._clusterPublicKey = value;
  }

  // cluster_version - computed: false, optional: false, required: true
  private _clusterVersion: string;
  public get clusterVersion() {
    return this._clusterVersion;
  }
  public set clusterVersion(value: string) {
    this._clusterVersion = value;
  }

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId: string;
  public get compartmentId() {
    return this._compartmentId;
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }

  // created_by - computed: true, optional: false, required: true
  public get createdBy() {
    return this.getStringAttribute('created_by');
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

  // is_cloud_sql_configured - computed: true, optional: true, required: false
  private _isCloudSqlConfigured?: boolean;
  public get isCloudSqlConfigured() {
    return this._isCloudSqlConfigured ?? this.getBooleanAttribute('is_cloud_sql_configured');
  }
  public set isCloudSqlConfigured(value: boolean | undefined) {
    this._isCloudSqlConfigured = value;
  }

  // is_high_availability - computed: false, optional: false, required: true
  private _isHighAvailability: boolean;
  public get isHighAvailability() {
    return this._isHighAvailability;
  }
  public set isHighAvailability(value: boolean) {
    this._isHighAvailability = value;
  }

  // is_secure - computed: false, optional: false, required: true
  private _isSecure: boolean;
  public get isSecure() {
    return this._isSecure;
  }
  public set isSecure(value: boolean) {
    this._isSecure = value;
  }

  // nodes - computed: true, optional: false, required: true
  public nodes(index: string) {
    return new BdsBdsInstanceNodes(this, 'nodes', index);
  }

  // number_of_nodes - computed: true, optional: false, required: true
  public get numberOfNodes() {
    return this.getNumberAttribute('number_of_nodes');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: true
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // cloud_sql_details - computed: false, optional: true, required: false
  private _cloudSqlDetails?: BdsBdsInstanceCloudSqlDetails[];
  public get cloudSqlDetails() {
    return this._cloudSqlDetails;
  }
  public set cloudSqlDetails(value: BdsBdsInstanceCloudSqlDetails[] | undefined) {
    this._cloudSqlDetails = value;
  }

  // master_node - computed: false, optional: false, required: true
  private _masterNode: BdsBdsInstanceMasterNode[];
  public get masterNode() {
    return this._masterNode;
  }
  public set masterNode(value: BdsBdsInstanceMasterNode[]) {
    this._masterNode = value;
  }

  // network_config - computed: false, optional: true, required: false
  private _networkConfig?: BdsBdsInstanceNetworkConfig[];
  public get networkConfig() {
    return this._networkConfig;
  }
  public set networkConfig(value: BdsBdsInstanceNetworkConfig[] | undefined) {
    this._networkConfig = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: BdsBdsInstanceTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: BdsBdsInstanceTimeouts | undefined) {
    this._timeouts = value;
  }

  // util_node - computed: false, optional: false, required: true
  private _utilNode: BdsBdsInstanceUtilNode[];
  public get utilNode() {
    return this._utilNode;
  }
  public set utilNode(value: BdsBdsInstanceUtilNode[]) {
    this._utilNode = value;
  }

  // worker_node - computed: false, optional: false, required: true
  private _workerNode: BdsBdsInstanceWorkerNode[];
  public get workerNode() {
    return this._workerNode;
  }
  public set workerNode(value: BdsBdsInstanceWorkerNode[]) {
    this._workerNode = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_admin_password: this._clusterAdminPassword,
      cluster_public_key: this._clusterPublicKey,
      cluster_version: this._clusterVersion,
      compartment_id: this._compartmentId,
      defined_tags: this._definedTags,
      display_name: this._displayName,
      freeform_tags: this._freeformTags,
      is_cloud_sql_configured: this._isCloudSqlConfigured,
      is_high_availability: this._isHighAvailability,
      is_secure: this._isSecure,
      cloud_sql_details: this._cloudSqlDetails,
      master_node: this._masterNode,
      network_config: this._networkConfig,
      timeouts: this._timeouts,
      util_node: this._utilNode,
      worker_node: this._workerNode,
    };
  }
}
