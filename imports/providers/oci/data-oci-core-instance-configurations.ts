// https://www.terraform.io/docs/providers/oci/r/data_oci_core_instance_configurations.html
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
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "instance_configurations": {
        "type": [
          "list",
          [
            "object",
            {
              "compartment_id": "string",
              "deferred_fields": [
                "list",
                "string"
              ],
              "defined_tags": [
                "map",
                "string"
              ],
              "display_name": "string",
              "freeform_tags": [
                "map",
                "string"
              ],
              "id": "string",
              "instance_details": [
                "list",
                [
                  "object",
                  {
                    "block_volumes": [
                      "list",
                      [
                        "object",
                        {
                          "attach_details": [
                            "list",
                            [
                              "object",
                              {
                                "device": "string",
                                "display_name": "string",
                                "is_pv_encryption_in_transit_enabled": "bool",
                                "is_read_only": "bool",
                                "is_shareable": "bool",
                                "type": "string",
                                "use_chap": "bool"
                              }
                            ]
                          ],
                          "create_details": [
                            "list",
                            [
                              "object",
                              {
                                "availability_domain": "string",
                                "backup_policy_id": "string",
                                "compartment_id": "string",
                                "defined_tags": [
                                  "map",
                                  "string"
                                ],
                                "display_name": "string",
                                "freeform_tags": [
                                  "map",
                                  "string"
                                ],
                                "kms_key_id": "string",
                                "size_in_gbs": "string",
                                "source_details": [
                                  "list",
                                  [
                                    "object",
                                    {
                                      "id": "string",
                                      "type": "string"
                                    }
                                  ]
                                ],
                                "vpus_per_gb": "string"
                              }
                            ]
                          ],
                          "volume_id": "string"
                        }
                      ]
                    ],
                    "instance_type": "string",
                    "launch_details": [
                      "list",
                      [
                        "object",
                        {
                          "agent_config": [
                            "list",
                            [
                              "object",
                              {
                                "is_management_disabled": "bool",
                                "is_monitoring_disabled": "bool"
                              }
                            ]
                          ],
                          "availability_domain": "string",
                          "compartment_id": "string",
                          "create_vnic_details": [
                            "list",
                            [
                              "object",
                              {
                                "assign_public_ip": "bool",
                                "defined_tags": [
                                  "map",
                                  "string"
                                ],
                                "display_name": "string",
                                "freeform_tags": [
                                  "map",
                                  "string"
                                ],
                                "hostname_label": "string",
                                "nsg_ids": [
                                  "list",
                                  "string"
                                ],
                                "private_ip": "string",
                                "skip_source_dest_check": "bool",
                                "subnet_id": "string"
                              }
                            ]
                          ],
                          "dedicated_vm_host_id": "string",
                          "defined_tags": [
                            "map",
                            "string"
                          ],
                          "display_name": "string",
                          "extended_metadata": [
                            "map",
                            "string"
                          ],
                          "fault_domain": "string",
                          "freeform_tags": [
                            "map",
                            "string"
                          ],
                          "ipxe_script": "string",
                          "is_pv_encryption_in_transit_enabled": "bool",
                          "launch_mode": "string",
                          "launch_options": [
                            "list",
                            [
                              "object",
                              {
                                "boot_volume_type": "string",
                                "firmware": "string",
                                "is_consistent_volume_naming_enabled": "bool",
                                "is_pv_encryption_in_transit_enabled": "bool",
                                "network_type": "string",
                                "remote_data_volume_type": "string"
                              }
                            ]
                          ],
                          "metadata": [
                            "map",
                            "string"
                          ],
                          "preferred_maintenance_action": "string",
                          "shape": "string",
                          "shape_config": [
                            "list",
                            [
                              "object",
                              {
                                "ocpus": "number"
                              }
                            ]
                          ],
                          "source_details": [
                            "list",
                            [
                              "object",
                              {
                                "boot_volume_id": "string",
                                "boot_volume_size_in_gbs": "string",
                                "image_id": "string",
                                "source_type": "string"
                              }
                            ]
                          ]
                        }
                      ]
                    ],
                    "secondary_vnics": [
                      "list",
                      [
                        "object",
                        {
                          "create_vnic_details": [
                            "list",
                            [
                              "object",
                              {
                                "assign_public_ip": "bool",
                                "defined_tags": [
                                  "map",
                                  "string"
                                ],
                                "display_name": "string",
                                "freeform_tags": [
                                  "map",
                                  "string"
                                ],
                                "hostname_label": "string",
                                "nsg_ids": [
                                  "list",
                                  "string"
                                ],
                                "private_ip": "string",
                                "skip_source_dest_check": "bool",
                                "subnet_id": "string"
                              }
                            ]
                          ],
                          "display_name": "string",
                          "nic_index": "number"
                        }
                      ]
                    ]
                  }
                ]
              ],
              "instance_id": "string",
              "source": "string",
              "time_created": "string"
            }
          ]
        ],
        "computed": true
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

export interface DataOciCoreInstanceConfigurationsConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  /** filter block */
  readonly filter?: DataOciCoreInstanceConfigurationsFilter[];
}
export class DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsBlockVolumesAttachDetails extends ComplexComputedList {

  // device - computed: true, optional: false, required: true
  public get device() {
    return this.getStringAttribute('device');
  }

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // is_pv_encryption_in_transit_enabled - computed: true, optional: false, required: true
  public get isPvEncryptionInTransitEnabled() {
    return this.getBooleanAttribute('is_pv_encryption_in_transit_enabled');
  }

  // is_read_only - computed: true, optional: false, required: true
  public get isReadOnly() {
    return this.getBooleanAttribute('is_read_only');
  }

  // is_shareable - computed: true, optional: false, required: true
  public get isShareable() {
    return this.getBooleanAttribute('is_shareable');
  }

  // type - computed: true, optional: false, required: true
  public get type() {
    return this.getStringAttribute('type');
  }

  // use_chap - computed: true, optional: false, required: true
  public get useChap() {
    return this.getBooleanAttribute('use_chap');
  }
}
export class DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsBlockVolumesCreateDetailsSourceDetails extends ComplexComputedList {

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // type - computed: true, optional: false, required: true
  public get type() {
    return this.getStringAttribute('type');
  }
}
export class DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsBlockVolumesCreateDetails extends ComplexComputedList {

  // availability_domain - computed: true, optional: false, required: true
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }

  // backup_policy_id - computed: true, optional: false, required: true
  public get backupPolicyId() {
    return this.getStringAttribute('backup_policy_id');
  }

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: true
  public get definedTags() {
    return 'not implemented' as any;
  }

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // freeform_tags - computed: true, optional: false, required: true
  public get freeformTags() {
    return 'not implemented' as any;
  }

  // kms_key_id - computed: true, optional: false, required: true
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // size_in_gbs - computed: true, optional: false, required: true
  public get sizeInGbs() {
    return this.getStringAttribute('size_in_gbs');
  }

  // source_details - computed: true, optional: false, required: true
  public get sourceDetails() {
    return 'not implemented' as any;
  }

  // vpus_per_gb - computed: true, optional: false, required: true
  public get vpusPerGb() {
    return this.getStringAttribute('vpus_per_gb');
  }
}
export class DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsBlockVolumes extends ComplexComputedList {

  // attach_details - computed: true, optional: false, required: true
  public get attachDetails() {
    return 'not implemented' as any;
  }

  // create_details - computed: true, optional: false, required: true
  public get createDetails() {
    return 'not implemented' as any;
  }

  // volume_id - computed: true, optional: false, required: true
  public get volumeId() {
    return this.getStringAttribute('volume_id');
  }
}
export class DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsAgentConfig extends ComplexComputedList {

  // is_management_disabled - computed: true, optional: false, required: true
  public get isManagementDisabled() {
    return this.getBooleanAttribute('is_management_disabled');
  }

  // is_monitoring_disabled - computed: true, optional: false, required: true
  public get isMonitoringDisabled() {
    return this.getBooleanAttribute('is_monitoring_disabled');
  }
}
export class DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsCreateVnicDetails extends ComplexComputedList {

  // assign_public_ip - computed: true, optional: false, required: true
  public get assignPublicIp() {
    return this.getBooleanAttribute('assign_public_ip');
  }

  // defined_tags - computed: true, optional: false, required: true
  public get definedTags() {
    return 'not implemented' as any;
  }

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // freeform_tags - computed: true, optional: false, required: true
  public get freeformTags() {
    return 'not implemented' as any;
  }

  // hostname_label - computed: true, optional: false, required: true
  public get hostnameLabel() {
    return this.getStringAttribute('hostname_label');
  }

  // nsg_ids - computed: true, optional: false, required: true
  public get nsgIds() {
    return this.getListAttribute('nsg_ids');
  }

  // private_ip - computed: true, optional: false, required: true
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }

  // skip_source_dest_check - computed: true, optional: false, required: true
  public get skipSourceDestCheck() {
    return this.getBooleanAttribute('skip_source_dest_check');
  }

  // subnet_id - computed: true, optional: false, required: true
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
}
export class DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsLaunchOptions extends ComplexComputedList {

  // boot_volume_type - computed: true, optional: false, required: true
  public get bootVolumeType() {
    return this.getStringAttribute('boot_volume_type');
  }

  // firmware - computed: true, optional: false, required: true
  public get firmware() {
    return this.getStringAttribute('firmware');
  }

  // is_consistent_volume_naming_enabled - computed: true, optional: false, required: true
  public get isConsistentVolumeNamingEnabled() {
    return this.getBooleanAttribute('is_consistent_volume_naming_enabled');
  }

  // is_pv_encryption_in_transit_enabled - computed: true, optional: false, required: true
  public get isPvEncryptionInTransitEnabled() {
    return this.getBooleanAttribute('is_pv_encryption_in_transit_enabled');
  }

  // network_type - computed: true, optional: false, required: true
  public get networkType() {
    return this.getStringAttribute('network_type');
  }

  // remote_data_volume_type - computed: true, optional: false, required: true
  public get remoteDataVolumeType() {
    return this.getStringAttribute('remote_data_volume_type');
  }
}
export class DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsShapeConfig extends ComplexComputedList {

  // ocpus - computed: true, optional: false, required: true
  public get ocpus() {
    return this.getNumberAttribute('ocpus');
  }
}
export class DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsSourceDetails extends ComplexComputedList {

  // boot_volume_id - computed: true, optional: false, required: true
  public get bootVolumeId() {
    return this.getStringAttribute('boot_volume_id');
  }

  // boot_volume_size_in_gbs - computed: true, optional: false, required: true
  public get bootVolumeSizeInGbs() {
    return this.getStringAttribute('boot_volume_size_in_gbs');
  }

  // image_id - computed: true, optional: false, required: true
  public get imageId() {
    return this.getStringAttribute('image_id');
  }

  // source_type - computed: true, optional: false, required: true
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
}
export class DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetails extends ComplexComputedList {

  // agent_config - computed: true, optional: false, required: true
  public get agentConfig() {
    return 'not implemented' as any;
  }

  // availability_domain - computed: true, optional: false, required: true
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // create_vnic_details - computed: true, optional: false, required: true
  public get createVnicDetails() {
    return 'not implemented' as any;
  }

  // dedicated_vm_host_id - computed: true, optional: false, required: true
  public get dedicatedVmHostId() {
    return this.getStringAttribute('dedicated_vm_host_id');
  }

  // defined_tags - computed: true, optional: false, required: true
  public get definedTags() {
    return 'not implemented' as any;
  }

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // extended_metadata - computed: true, optional: false, required: true
  public get extendedMetadata() {
    return 'not implemented' as any;
  }

  // fault_domain - computed: true, optional: false, required: true
  public get faultDomain() {
    return this.getStringAttribute('fault_domain');
  }

  // freeform_tags - computed: true, optional: false, required: true
  public get freeformTags() {
    return 'not implemented' as any;
  }

  // ipxe_script - computed: true, optional: false, required: true
  public get ipxeScript() {
    return this.getStringAttribute('ipxe_script');
  }

  // is_pv_encryption_in_transit_enabled - computed: true, optional: false, required: true
  public get isPvEncryptionInTransitEnabled() {
    return this.getBooleanAttribute('is_pv_encryption_in_transit_enabled');
  }

  // launch_mode - computed: true, optional: false, required: true
  public get launchMode() {
    return this.getStringAttribute('launch_mode');
  }

  // launch_options - computed: true, optional: false, required: true
  public get launchOptions() {
    return 'not implemented' as any;
  }

  // metadata - computed: true, optional: false, required: true
  public get metadata() {
    return 'not implemented' as any;
  }

  // preferred_maintenance_action - computed: true, optional: false, required: true
  public get preferredMaintenanceAction() {
    return this.getStringAttribute('preferred_maintenance_action');
  }

  // shape - computed: true, optional: false, required: true
  public get shape() {
    return this.getStringAttribute('shape');
  }

  // shape_config - computed: true, optional: false, required: true
  public get shapeConfig() {
    return 'not implemented' as any;
  }

  // source_details - computed: true, optional: false, required: true
  public get sourceDetails() {
    return 'not implemented' as any;
  }
}
export class DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsSecondaryVnicsCreateVnicDetails extends ComplexComputedList {

  // assign_public_ip - computed: true, optional: false, required: true
  public get assignPublicIp() {
    return this.getBooleanAttribute('assign_public_ip');
  }

  // defined_tags - computed: true, optional: false, required: true
  public get definedTags() {
    return 'not implemented' as any;
  }

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // freeform_tags - computed: true, optional: false, required: true
  public get freeformTags() {
    return 'not implemented' as any;
  }

  // hostname_label - computed: true, optional: false, required: true
  public get hostnameLabel() {
    return this.getStringAttribute('hostname_label');
  }

  // nsg_ids - computed: true, optional: false, required: true
  public get nsgIds() {
    return this.getListAttribute('nsg_ids');
  }

  // private_ip - computed: true, optional: false, required: true
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }

  // skip_source_dest_check - computed: true, optional: false, required: true
  public get skipSourceDestCheck() {
    return this.getBooleanAttribute('skip_source_dest_check');
  }

  // subnet_id - computed: true, optional: false, required: true
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
}
export class DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsSecondaryVnics extends ComplexComputedList {

  // create_vnic_details - computed: true, optional: false, required: true
  public get createVnicDetails() {
    return 'not implemented' as any;
  }

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // nic_index - computed: true, optional: false, required: true
  public get nicIndex() {
    return this.getNumberAttribute('nic_index');
  }
}
export class DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetails extends ComplexComputedList {

  // block_volumes - computed: true, optional: false, required: true
  public get blockVolumes() {
    return 'not implemented' as any;
  }

  // instance_type - computed: true, optional: false, required: true
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }

  // launch_details - computed: true, optional: false, required: true
  public get launchDetails() {
    return 'not implemented' as any;
  }

  // secondary_vnics - computed: true, optional: false, required: true
  public get secondaryVnics() {
    return 'not implemented' as any;
  }
}
export class DataOciCoreInstanceConfigurationsInstanceConfigurations extends ComplexComputedList {

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // deferred_fields - computed: true, optional: false, required: true
  public get deferredFields() {
    return this.getListAttribute('deferred_fields');
  }

  // defined_tags - computed: true, optional: false, required: true
  public get definedTags() {
    return 'not implemented' as any;
  }

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // freeform_tags - computed: true, optional: false, required: true
  public get freeformTags() {
    return 'not implemented' as any;
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_details - computed: true, optional: false, required: true
  public get instanceDetails() {
    return 'not implemented' as any;
  }

  // instance_id - computed: true, optional: false, required: true
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // source - computed: true, optional: false, required: true
  public get source() {
    return this.getStringAttribute('source');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }
}
export interface DataOciCoreInstanceConfigurationsFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciCoreInstanceConfigurations extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciCoreInstanceConfigurationsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_instance_configurations',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._compartmentId = config.compartmentId;
    this._filter = config.filter;
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

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // instance_configurations - computed: true, optional: false, required: true
  public instanceConfigurations(index: string) {
    return new DataOciCoreInstanceConfigurationsInstanceConfigurations(this, 'instance_configurations', index);
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciCoreInstanceConfigurationsFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciCoreInstanceConfigurationsFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      filter: this._filter,
    };
  }
}
