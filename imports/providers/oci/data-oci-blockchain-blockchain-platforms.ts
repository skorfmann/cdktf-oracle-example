// https://www.terraform.io/docs/providers/oci/r/data_oci_blockchain_blockchain_platforms.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "blockchain_platform_collection": {
        "type": [
          "list",
          [
            "object",
            {
              "items": [
                "list",
                [
                  "object",
                  {
                    "ca_cert_archive_text": "string",
                    "compartment_id": "string",
                    "component_details": [
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
                    "compute_shape": "string",
                    "defined_tags": [
                      "map",
                      "string"
                    ],
                    "description": "string",
                    "display_name": "string",
                    "federated_user_id": "string",
                    "freeform_tags": [
                      "map",
                      "string"
                    ],
                    "host_ocpu_utilization_info": [
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
                    "id": "string",
                    "idcs_access_token": "string",
                    "is_byol": "bool",
                    "is_multi_ad": "bool",
                    "lifecycle_details": "string",
                    "platform_role": "string",
                    "replicas": [
                      "list",
                      [
                        "object",
                        {
                          "ca_count": "number",
                          "console_count": "number",
                          "proxy_count": "number"
                        }
                      ]
                    ],
                    "service_endpoint": "string",
                    "service_version": "string",
                    "state": "string",
                    "storage_size_in_tbs": "number",
                    "storage_used_in_tbs": "number",
                    "time_created": "string",
                    "time_updated": "string",
                    "total_ocpu_capacity": "number"
                  }
                ]
              ]
            }
          ]
        ],
        "computed": true
      },
      "compartment_id": {
        "type": "string",
        "required": true
      },
      "display_name": {
        "type": "string",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "state": {
        "type": "string",
        "optional": true
      }
    },
    "block_types": {
      "filter": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "name": {
              "type": "string",
              "required": true
            },
            "regex": {
              "type": "bool",
              "optional": true
            },
            "values": {
              "type": [
                "list",
                "string"
              ],
              "required": true
            }
          }
        }
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

export interface DataOciBlockchainBlockchainPlatformsConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly displayName?: string;
  readonly state?: string;
  /** filter block */
  readonly filter?: DataOciBlockchainBlockchainPlatformsFilter[];
}
export class DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParam extends ComplexComputedList {

  // ocpu_allocation_number - computed: true, optional: false, required: true
  public get ocpuAllocationNumber() {
    return this.getNumberAttribute('ocpu_allocation_number');
  }
}
export class DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsns extends ComplexComputedList {

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
export class DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParam extends ComplexComputedList {

  // ocpu_allocation_number - computed: true, optional: false, required: true
  public get ocpuAllocationNumber() {
    return this.getNumberAttribute('ocpu_allocation_number');
  }
}
export class DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeers extends ComplexComputedList {

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
export class DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetails extends ComplexComputedList {

  // osns - computed: true, optional: false, required: true
  public get osns() {
    return 'not implemented' as any;
  }

  // peers - computed: true, optional: false, required: true
  public get peers() {
    return 'not implemented' as any;
  }
}
export class DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfo extends ComplexComputedList {

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
export class DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicas extends ComplexComputedList {

  // ca_count - computed: true, optional: false, required: true
  public get caCount() {
    return this.getNumberAttribute('ca_count');
  }

  // console_count - computed: true, optional: false, required: true
  public get consoleCount() {
    return this.getNumberAttribute('console_count');
  }

  // proxy_count - computed: true, optional: false, required: true
  public get proxyCount() {
    return this.getNumberAttribute('proxy_count');
  }
}
export class DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItems extends ComplexComputedList {

  // ca_cert_archive_text - computed: true, optional: false, required: true
  public get caCertArchiveText() {
    return this.getStringAttribute('ca_cert_archive_text');
  }

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // component_details - computed: true, optional: false, required: true
  public get componentDetails() {
    return 'not implemented' as any;
  }

  // compute_shape - computed: true, optional: false, required: true
  public get computeShape() {
    return this.getStringAttribute('compute_shape');
  }

  // defined_tags - computed: true, optional: false, required: true
  public get definedTags() {
    return 'not implemented' as any;
  }

  // description - computed: true, optional: false, required: true
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // federated_user_id - computed: true, optional: false, required: true
  public get federatedUserId() {
    return this.getStringAttribute('federated_user_id');
  }

  // freeform_tags - computed: true, optional: false, required: true
  public get freeformTags() {
    return 'not implemented' as any;
  }

  // host_ocpu_utilization_info - computed: true, optional: false, required: true
  public get hostOcpuUtilizationInfo() {
    return 'not implemented' as any;
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // idcs_access_token - computed: true, optional: false, required: true
  public get idcsAccessToken() {
    return this.getStringAttribute('idcs_access_token');
  }

  // is_byol - computed: true, optional: false, required: true
  public get isByol() {
    return this.getBooleanAttribute('is_byol');
  }

  // is_multi_ad - computed: true, optional: false, required: true
  public get isMultiAd() {
    return this.getBooleanAttribute('is_multi_ad');
  }

  // lifecycle_details - computed: true, optional: false, required: true
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // platform_role - computed: true, optional: false, required: true
  public get platformRole() {
    return this.getStringAttribute('platform_role');
  }

  // replicas - computed: true, optional: false, required: true
  public get replicas() {
    return 'not implemented' as any;
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

  // storage_size_in_tbs - computed: true, optional: false, required: true
  public get storageSizeInTbs() {
    return this.getNumberAttribute('storage_size_in_tbs');
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

  // total_ocpu_capacity - computed: true, optional: false, required: true
  public get totalOcpuCapacity() {
    return this.getNumberAttribute('total_ocpu_capacity');
  }
}
export class DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollection extends ComplexComputedList {

  // items - computed: true, optional: false, required: true
  public get items() {
    return 'not implemented' as any;
  }
}
export interface DataOciBlockchainBlockchainPlatformsFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciBlockchainBlockchainPlatforms extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciBlockchainBlockchainPlatformsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_blockchain_blockchain_platforms',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._compartmentId = config.compartmentId;
    this._displayName = config.displayName;
    this._state = config.state;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // blockchain_platform_collection - computed: true, optional: false, required: true
  public blockchainPlatformCollection(index: string) {
    return new DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollection(this, 'blockchain_platform_collection', index);
  }

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId: string;
  public get compartmentId() {
    return this._compartmentId;
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string;
  public get displayName() {
    return this._displayName;
  }
  public set displayName(value: string | undefined) {
    this._displayName = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string;
  public get state() {
    return this._state;
  }
  public set state(value: string | undefined) {
    this._state = value;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciBlockchainBlockchainPlatformsFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciBlockchainBlockchainPlatformsFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      display_name: this._displayName,
      state: this._state,
      filter: this._filter,
    };
  }
}
