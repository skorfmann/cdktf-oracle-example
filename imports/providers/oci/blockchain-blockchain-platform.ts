// https://www.terraform.io/docs/providers/oci/r/blockchain_blockchain_platform.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "ca_cert_archive_text": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "compartment_id": {
        "type": "string",
        "required": true
      },
      "component_details": {
        "type": [
          "list",
          [
            "object",
            {
              "osns": [
                "list",
                [
                  "object",
                  {
                    "ad": "string",
                    "ocpu_allocation_param": [
                      "list",
                      [
                        "object",
                        {
                          "ocpu_allocation_number": "number"
                        }
                      ]
                    ],
                    "osn_key": "string",
                    "state": "string"
                  }
                ]
              ],
              "peers": [
                "list",
                [
                  "object",
                  {
                    "ad": "string",
                    "alias": "string",
                    "host": "string",
                    "ocpu_allocation_param": [
                      "list",
                      [
                        "object",
                        {
                          "ocpu_allocation_number": "number"
                        }
                      ]
                    ],
                    "peer_key": "string",
                    "role": "string",
                    "state": "string"
                  }
                ]
              ]
            }
          ]
        ],
        "computed": true
      },
      "compute_shape": {
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
      "description": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "display_name": {
        "type": "string",
        "required": true
      },
      "federated_user_id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "freeform_tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "host_ocpu_utilization_info": {
        "type": [
          "list",
          [
            "object",
            {
              "host": "string",
              "ocpu_capacity_number": "number",
              "ocpu_utilization_number": "number"
            }
          ]
        ],
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "idcs_access_token": {
        "type": "string",
        "optional": true,
        "sensitive": true
      },
      "is_byol": {
        "type": "bool",
        "optional": true,
        "computed": true
      },
      "is_multi_ad": {
        "type": "bool",
        "computed": true
      },
      "lifecycle_details": {
        "type": "string",
        "computed": true
      },
      "platform_role": {
        "type": "string",
        "required": true
      },
      "service_endpoint": {
        "type": "string",
        "computed": true
      },
      "service_version": {
        "type": "string",
        "computed": true
      },
      "state": {
        "type": "string",
        "computed": true
      },
      "storage_size_in_tbs": {
        "type": "number",
        "optional": true,
        "computed": true
      },
      "storage_used_in_tbs": {
        "type": "number",
        "computed": true
      },
      "time_created": {
        "type": "string",
        "computed": true
      },
      "time_updated": {
        "type": "string",
        "computed": true
      },
      "total_ocpu_capacity": {
        "type": "number",
        "optional": true,
        "computed": true
      }
    },
    "block_types": {
      "replicas": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "ca_count": {
              "type": "number",
              "optional": true,
              "computed": true
            },
            "console_count": {
              "type": "number",
              "optional": true,
              "computed": true
            },
            "proxy_count": {
              "type": "number",
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

export interface BlockchainBlockchainPlatformConfig extends TerraformMetaArguments {
  readonly caCertArchiveText?: string;
  readonly compartmentId: string;
  readonly computeShape: string;
  readonly definedTags?: { [key: string]: string };
  readonly description?: string;
  readonly displayName: string;
  readonly federatedUserId?: string;
  readonly freeformTags?: { [key: string]: string };
  readonly idcsAccessToken?: string;
  readonly isByol?: boolean;
  readonly platformRole: string;
  readonly storageSizeInTbs?: number;
  readonly totalOcpuCapacity?: number;
  /** replicas block */
  readonly replicas?: BlockchainBlockchainPlatformReplicas[];
  /** timeouts block */
  readonly timeouts?: BlockchainBlockchainPlatformTimeouts;
}
export class BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParam extends ComplexComputedList {

  // ocpu_allocation_number - computed: true, optional: false, required: true
  public get ocpuAllocationNumber() {
    return this.getNumberAttribute('ocpu_allocation_number');
  }
}
export class BlockchainBlockchainPlatformComponentDetailsOsns extends ComplexComputedList {

  // ad - computed: true, optional: false, required: true
  public get ad() {
    return this.getStringAttribute('ad');
  }

  // ocpu_allocation_param - computed: true, optional: false, required: true
  public get ocpuAllocationParam() {
    return 'not implemented' as any;
  }

  // osn_key - computed: true, optional: false, required: true
  public get osnKey() {
    return this.getStringAttribute('osn_key');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }
}
export class BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParam extends ComplexComputedList {

  // ocpu_allocation_number - computed: true, optional: false, required: true
  public get ocpuAllocationNumber() {
    return this.getNumberAttribute('ocpu_allocation_number');
  }
}
export class BlockchainBlockchainPlatformComponentDetailsPeers extends ComplexComputedList {

  // ad - computed: true, optional: false, required: true
  public get ad() {
    return this.getStringAttribute('ad');
  }

  // alias - computed: true, optional: false, required: true
  public get alias() {
    return this.getStringAttribute('alias');
  }

  // host - computed: true, optional: false, required: true
  public get host() {
    return this.getStringAttribute('host');
  }

  // ocpu_allocation_param - computed: true, optional: false, required: true
  public get ocpuAllocationParam() {
    return 'not implemented' as any;
  }

  // peer_key - computed: true, optional: false, required: true
  public get peerKey() {
    return this.getStringAttribute('peer_key');
  }

  // role - computed: true, optional: false, required: true
  public get role() {
    return this.getStringAttribute('role');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }
}
export class BlockchainBlockchainPlatformComponentDetails extends ComplexComputedList {

  // osns - computed: true, optional: false, required: true
  public get osns() {
    return 'not implemented' as any;
  }

  // peers - computed: true, optional: false, required: true
  public get peers() {
    return 'not implemented' as any;
  }
}
export class BlockchainBlockchainPlatformHostOcpuUtilizationInfo extends ComplexComputedList {

  // host - computed: true, optional: false, required: true
  public get host() {
    return this.getStringAttribute('host');
  }

  // ocpu_capacity_number - computed: true, optional: false, required: true
  public get ocpuCapacityNumber() {
    return this.getNumberAttribute('ocpu_capacity_number');
  }

  // ocpu_utilization_number - computed: true, optional: false, required: true
  public get ocpuUtilizationNumber() {
    return this.getNumberAttribute('ocpu_utilization_number');
  }
}
export interface BlockchainBlockchainPlatformReplicas {
  readonly caCount?: number;
  readonly consoleCount?: number;
  readonly proxyCount?: number;
}
export interface BlockchainBlockchainPlatformTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class BlockchainBlockchainPlatform extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: BlockchainBlockchainPlatformConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_blockchain_blockchain_platform',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._caCertArchiveText = config.caCertArchiveText;
    this._compartmentId = config.compartmentId;
    this._computeShape = config.computeShape;
    this._definedTags = config.definedTags;
    this._description = config.description;
    this._displayName = config.displayName;
    this._federatedUserId = config.federatedUserId;
    this._freeformTags = config.freeformTags;
    this._idcsAccessToken = config.idcsAccessToken;
    this._isByol = config.isByol;
    this._platformRole = config.platformRole;
    this._storageSizeInTbs = config.storageSizeInTbs;
    this._totalOcpuCapacity = config.totalOcpuCapacity;
    this._replicas = config.replicas;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ca_cert_archive_text - computed: true, optional: true, required: false
  private _caCertArchiveText?: string;
  public get caCertArchiveText() {
    return this._caCertArchiveText ?? this.getStringAttribute('ca_cert_archive_text');
  }
  public set caCertArchiveText(value: string | undefined) {
    this._caCertArchiveText = value;
  }

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId: string;
  public get compartmentId() {
    return this._compartmentId;
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }

  // component_details - computed: true, optional: false, required: true
  public componentDetails(index: string) {
    return new BlockchainBlockchainPlatformComponentDetails(this, 'component_details', index);
  }

  // compute_shape - computed: false, optional: false, required: true
  private _computeShape: string;
  public get computeShape() {
    return this._computeShape;
  }
  public set computeShape(value: string) {
    this._computeShape = value;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }
  public get definedTags(): { [key: string]: string } | undefined {
    return this._definedTags; // Getting the computed value is not yet implemented
  }
  public set definedTags(value: { [key: string]: string } | undefined) {
    this._definedTags = value;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description ?? this.getStringAttribute('description');
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName: string;
  public get displayName() {
    return this._displayName;
  }
  public set displayName(value: string) {
    this._displayName = value;
  }

  // federated_user_id - computed: true, optional: true, required: false
  private _federatedUserId?: string;
  public get federatedUserId() {
    return this._federatedUserId ?? this.getStringAttribute('federated_user_id');
  }
  public set federatedUserId(value: string | undefined) {
    this._federatedUserId = value;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }
  public get freeformTags(): { [key: string]: string } | undefined {
    return this._freeformTags; // Getting the computed value is not yet implemented
  }
  public set freeformTags(value: { [key: string]: string } | undefined) {
    this._freeformTags = value;
  }

  // host_ocpu_utilization_info - computed: true, optional: false, required: true
  public hostOcpuUtilizationInfo(index: string) {
    return new BlockchainBlockchainPlatformHostOcpuUtilizationInfo(this, 'host_ocpu_utilization_info', index);
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // idcs_access_token - computed: false, optional: true, required: false
  private _idcsAccessToken?: string;
  public get idcsAccessToken() {
    return this._idcsAccessToken;
  }
  public set idcsAccessToken(value: string | undefined) {
    this._idcsAccessToken = value;
  }

  // is_byol - computed: true, optional: true, required: false
  private _isByol?: boolean;
  public get isByol() {
    return this._isByol ?? this.getBooleanAttribute('is_byol');
  }
  public set isByol(value: boolean | undefined) {
    this._isByol = value;
  }

  // is_multi_ad - computed: true, optional: false, required: true
  public get isMultiAd() {
    return this.getBooleanAttribute('is_multi_ad');
  }

  // lifecycle_details - computed: true, optional: false, required: true
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // platform_role - computed: false, optional: false, required: true
  private _platformRole: string;
  public get platformRole() {
    return this._platformRole;
  }
  public set platformRole(value: string) {
    this._platformRole = value;
  }

  // service_endpoint - computed: true, optional: false, required: true
  public get serviceEndpoint() {
    return this.getStringAttribute('service_endpoint');
  }

  // service_version - computed: true, optional: false, required: true
  public get serviceVersion() {
    return this.getStringAttribute('service_version');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // storage_size_in_tbs - computed: true, optional: true, required: false
  private _storageSizeInTbs?: number;
  public get storageSizeInTbs() {
    return this._storageSizeInTbs ?? this.getNumberAttribute('storage_size_in_tbs');
  }
  public set storageSizeInTbs(value: number | undefined) {
    this._storageSizeInTbs = value;
  }

  // storage_used_in_tbs - computed: true, optional: false, required: true
  public get storageUsedInTbs() {
    return this.getNumberAttribute('storage_used_in_tbs');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: true
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // total_ocpu_capacity - computed: true, optional: true, required: false
  private _totalOcpuCapacity?: number;
  public get totalOcpuCapacity() {
    return this._totalOcpuCapacity ?? this.getNumberAttribute('total_ocpu_capacity');
  }
  public set totalOcpuCapacity(value: number | undefined) {
    this._totalOcpuCapacity = value;
  }

  // replicas - computed: false, optional: true, required: false
  private _replicas?: BlockchainBlockchainPlatformReplicas[];
  public get replicas() {
    return this._replicas;
  }
  public set replicas(value: BlockchainBlockchainPlatformReplicas[] | undefined) {
    this._replicas = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: BlockchainBlockchainPlatformTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: BlockchainBlockchainPlatformTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      ca_cert_archive_text: this._caCertArchiveText,
      compartment_id: this._compartmentId,
      compute_shape: this._computeShape,
      defined_tags: this._definedTags,
      description: this._description,
      display_name: this._displayName,
      federated_user_id: this._federatedUserId,
      freeform_tags: this._freeformTags,
      idcs_access_token: this._idcsAccessToken,
      is_byol: this._isByol,
      platform_role: this._platformRole,
      storage_size_in_tbs: this._storageSizeInTbs,
      total_ocpu_capacity: this._totalOcpuCapacity,
      replicas: this._replicas,
      timeouts: this._timeouts,
    };
  }
}
